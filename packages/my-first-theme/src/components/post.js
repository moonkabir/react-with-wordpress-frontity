import React from "react";
import { connect, styled, Head} from "frontity";
import dayjs from "dayjs";

const Post = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const author = state.source.author[post.author];
    const Html2React = libraries.html2react.Component;
    const formattedDate = dayjs(post.date).format("DD dddd, MMMM YYYY");
    // console.log(author.avatar_urls);

    return (
        <PostInfo>
            <Head>
                <title>{post.title.rendered}</title>
                <meta name="description" content={post.excerpt.rendered} />
            </Head>
            <h2>Title: {post.title.rendered}</h2>
            <h2>Type: {post.type}</h2>
            <h2 dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}/>
            <h2>ID: {post.id}</h2>
            <h2>Status: {post.status}</h2>
            <h2>Author: {post.author}</h2>
            <h2>Author: {author.name}</h2>
            <h2>Date: {formattedDate}</h2>
            <img src={author.avatar_urls[96]} alt="{author.name}" />
            {/* {category.map((category_id) => {
                <h2>Categories: {category_id}</h2>;
            })}
            <h2>Tags: {post.tags}</h2> */}
            <Html2React html={post.content.rendered} />
        </PostInfo>
    );
};

export default connect(Post);

const PostInfo = styled.div`
    background-image: linear-gradient(to right, #f4f4f4, #fff);
    margin-bottom: 1em;
    padding: 0.5em;
    border-left: 4px solid lightseagreen;
    font-size: 0.8em;
    & > p {
        margin: 0;
    }
`;