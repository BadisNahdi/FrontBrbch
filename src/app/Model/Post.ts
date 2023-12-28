import { User } from "./User";

export class Post {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    userId: number;
    categoryId: number;
    user: User;
    published: boolean;
    createdOn: Date;
    modifiedOn: Date;
    mainImageUrl: string;

    constructor(
        id = -1,
        title = '',
        slug = '',
        content = '',
        excerpt = '',
        userId = -1,
        categoryId = -1,
        user = new User(),
        published = false,
        createdOn = new Date(),
        modifiedOn = new Date(),
        mainImageUrl = ''
    ) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.content = content;
        this.excerpt = excerpt;
        this.userId = userId;
        this.categoryId = categoryId;
        this.user = user;
        this.published = published;
        this.createdOn = createdOn;
        this.modifiedOn = modifiedOn;
        this.mainImageUrl = mainImageUrl;
    }
}