import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatError = (error: any): string => {
  if (error.name === 'ZodError') {
    // Zod 스키마 검증 에러 처리
    const fieldErrors = Object.keys(error.errors).map((field) => {
      const errorMessage = error.errors[field].message;
      return `${error.errors[field].path}: ${errorMessage}`; // field: errorMessage
    });
    return fieldErrors.join('. ');
  } else if (error.name === 'ValidationError') {
    // Mongoose의 ValidationError 처리
    const fieldErrors = Object.keys(error.errors).map((field) => {
      const errorMessage = error.errors[field].message;
      return errorMessage;
    });
    return fieldErrors.join('. ');
  } else if (error.code === 11000) {
    // MongoDB의 중복 키 에러 처리
    const duplicateField = Object.keys(error.keyValue)[0]; // 중복된 필드명 가져오기
    return `${duplicateField} already exists`;
  } else {
    // 기타 예외 처리
    return typeof error.message === 'string'
      ? error.message
      : JSON.stringify(error.message);
  }
};

// 카드 시간 표시 방법
export const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `${diffDays}일 전`;
  }
  if (diffHours > 0) {
    return `${diffHours}시간 전`;
  }
  return '방금 전';
};

// 서브페이지 주소 정리 함수
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase() // 소문자로 변환
    .replace(/[^a-z0-9\s-]/g, '') // 알파벳, 숫자, 공백, 하이픈만 허용
    .trim() // 공백 제거
    .replace(/\s+/g, '-') // 공백을 하이픈으로 대체
    .replace(/-+/g, '-'); // 여러 하이픈을 하나로 축소
};
