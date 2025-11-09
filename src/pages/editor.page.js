export class EditorPage {
    constructor(page) {
        // техническое описание страницы
        //update
        this.articleTitle = page.getByRole('textbox', { name: 'Article Title' });
        this.editArticle = page.getByRole('link', { name: ' Edit Article' });
        this.articleUpdate = page.getByRole('button', { name: 'Update Article' });
        //post comment
        this.fieldComment = page.getByRole('textbox', { name: 'Write a comment...' });
        this.buttonPost = page.getByRole('button', { name: 'Post Comment' });
    }
    // бизнесовые действия со страницой

    async addComment(article) {
        await this.fieldComment.click();
        await this.fieldComment.fill(article.coment);
        await this.buttonPost.click();
    }

    async updateArticle(article) {
        await this.editArticle.nth(1).click();
        await this.articleTitle.click();
        await this.articleTitle.clear();
        await this.articleTitle.fill(article.title);
        await this.articleUpdate.click();
    }

    }
