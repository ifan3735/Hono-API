"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.createComment = exports.getCommentService = exports.commentsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const commentsService = async (limit) => {
    if (limit) {
        return await db_1.default.query.commentsTable.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.commentsTable.findMany();
};
exports.commentsService = commentsService;
const getCommentService = async (id) => {
    return await db_1.default.query.commentsTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.commentsTable.id, id)
    });
};
exports.getCommentService = getCommentService;
// create a new comment in the database
const createComment = async (comment) => {
    await db_1.default.insert(schema_1.commentsTable).values(comment);
    return 'Comment created successfully';
};
exports.createComment = createComment;
// update a comment in the database
const updateComment = async (id, comment) => {
    await db_1.default.update(schema_1.commentsTable).set(comment).where((0, drizzle_orm_1.eq)(schema_1.commentsTable.id, id));
    return 'Comment updated successfully';
};
exports.updateComment = updateComment;
// delete a comment from the database
const deleteComment = async (id) => {
    await db_1.default.delete(schema_1.commentsTable).where((0, drizzle_orm_1.eq)(schema_1.commentsTable.id, id));
    return 'Comment deleted successfully';
};
exports.deleteComment = deleteComment;
