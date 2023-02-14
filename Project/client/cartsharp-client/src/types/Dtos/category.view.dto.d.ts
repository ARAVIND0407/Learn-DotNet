declare interface CategoryViewDto {
    /**
     * The unique identifier of the category. This is a read-only property. It
     * will be automatically generated by the server. The client will not be able
     * to set this value. Usually, this is the primary key of the category in the
     * database.
     */
    readonly id: number;

    /**
     * The name of the category.
     */
    name: string;

    /**
     * The description of the category.
     */
    description: string;
}