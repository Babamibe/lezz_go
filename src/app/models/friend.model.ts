import { Project } from "./project.model";

export class Friend {
    constructor(
        public id:number,
        public username: string,
        public firstName: string,
        public lastName: string,
        public avatarUrl: string,
        public commonProjects:Project[]
    ) {}

}