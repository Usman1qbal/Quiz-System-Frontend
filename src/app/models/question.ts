export interface Question {
    id: number,
    description: string,
    option: Option[],
    answer: string
}

export interface Option {
    option: string
}
