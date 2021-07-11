import { Question } from "./question";

export interface TestForm {
    title: string;
    questionIds: Array<number>
}
export interface TestListItem extends TestForm {
    id: number;
}
export interface Test {
    questions: Question[];
    id: string;
    questionIds: Array<string>;
    title: string;
}
