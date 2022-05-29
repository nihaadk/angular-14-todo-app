import { FormControl } from "@angular/forms";

export interface Todo {
    id: number;
    title: string;
    description: string;
    createdDate: Date;
}

export interface TodoForm {
    id: FormControl<number>,
    title: FormControl<string>,
    description: FormControl<string>,
    createdDate: FormControl<Date>,
}