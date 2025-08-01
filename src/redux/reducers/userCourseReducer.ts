import {
  USER_COURSE_LIST_REQUEST,
  USER_COURSE_LIST_SUCCESS,
  USER_COURSE_LIST_FAIL,
} from "../constants/userCourseConstants";
import { UserCourse } from "@/types/user";

interface UserCourseListState {
  loading: boolean;
  courses: UserCourse[];
  error: string | null;
  page: number;
  pageSize: number;
  totalCourses: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

const initialState: UserCourseListState = {
  loading: false,
  courses: [],
  error: null,
  page: 1,
  pageSize: 10,
  totalCourses: 0,
  totalPages: 0,
  hasNextPage: false,
  hasPreviousPage: false,
};

export const userCourseListReducer = (
  state = initialState,
  action: any
): UserCourseListState => {
  switch (action.type) {
    case USER_COURSE_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case USER_COURSE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload.courses || action.payload,
        page: action.payload.page ?? state.page,
        pageSize: action.payload.pageSize ?? state.pageSize,
        totalCourses: action.payload.totalCourses ?? state.totalCourses,
        totalPages: action.payload.totalPages,
        hasNextPage: action.payload.hasNextPage,
        hasPreviousPage: action.payload.hasPreviousPage,
        error: null,
      };
    case USER_COURSE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}; 