"use client";

import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";
import { CommentProps } from "@/libs/types";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}

        <PostOwnner ImagePath={"/profileImages/pimolnat.png"} 
        username={"Pimolnat Kaewboot 660610779"} 
        postTitle="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" 
        likes={100} 
        />

        {/* Comment Example */}
      

        {/* Reply Example */}
       
        {/* map-loop render Comment component here */}
        {comments.map((comment: CommentProps) => (<Comment key={comment.username} {...comment}/>))}
      </div>
    </div>
  );
}
