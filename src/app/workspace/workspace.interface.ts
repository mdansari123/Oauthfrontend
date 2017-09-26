export interface Workspace {
    Intentname: string;
    Intentquestions: Intentquestion[];
}

export interface Intentquestion {
    question: string;
}