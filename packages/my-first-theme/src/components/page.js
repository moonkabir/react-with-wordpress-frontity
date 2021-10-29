import React from "react";
import { connect, Head } from "frontity";

const Page = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    console.log(page);
    const Html2React = libraries.html2react.Component;

    return (
        <div>
            <Head>
                <title>{page.title.rendered}</title>
            </Head>
            <h2>{page.title.rendered}</h2>
            <Html2React html={page.content.rendered} />
        </div>
    );
};

export default connect(Page);
