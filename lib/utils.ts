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
