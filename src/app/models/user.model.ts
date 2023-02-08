import { Project } from "./project.model";

export class User {
    constructor(
        public id:number,
        public username: string,
        public firstName: string,
        public lastName: string,
        public avatarUrl: string,
        public projects:Project[]
    ) {}
}