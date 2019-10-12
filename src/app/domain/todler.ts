export class Todler {
    content: string;
    isDid: boolean;

    constructor(content = '', isDid = false) {
        this.content = content;
        this.isDid = isDid;
    }
}