import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

const PostDetail = () => {
  const location = useLocation();
  const post = location.state.post;
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <Container>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <h4>댓글</h4>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <Form onSubmit={handleCommentSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          댓글 달기
        </Button>
      </Form>
    </Container>
  );
};

export default PostDetail;



