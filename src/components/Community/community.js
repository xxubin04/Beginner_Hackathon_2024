import React, { useState } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';
import './Community.css';

const Community = ({ city }) => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [nickname, setNickname] = useState('');
  const [members, setMembers] = useState('');
  const [content, setContent] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      number: posts.length + 1,
      title,
      nickname,
      members,
      content,
    };
    setPosts([...posts, newPost]);
    setTitle('');
    setNickname('');
    setMembers('');
    setContent('');
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleRowClick = (post) => {
    setSelectedPost(post);
    setComments([]);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    
    <Container className="city">
    <h1 className="city">{city} 커뮤니티</h1>
      {selectedPost ? (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <h4>댓글</h4>
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
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <Button variant="secondary" onClick={() => setSelectedPost(null)}>
            목록으로 돌아가기
          </Button>
        </div>
      ) : (
        <>
          {showForm && (
            <Form onSubmit={handleSubmit} className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>제목</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>닉네임</Form.Label>
                <Form.Control
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="닉네임"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>인원 수</Form.Label>
                <Form.Control
                  type="number"
                  value={members}
                  onChange={(e) => setMembers(e.target.value)}
                  placeholder="인원 수"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>내용</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="내용을 입력하세요"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                게시
              </Button>
            </Form>
          )}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>닉네임</th>
                <th>인원 수</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.number} onClick={() => handleRowClick(post)}>
                  <td>{post.number}</td>
                  <td>{post.title}</td>
                  <td>{post.nickname}</td>
                  <td>{post.members}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          
          <Button variant="primary" onClick={toggleForm} className="btn-fixed">
            {showForm ? '숨기기' : '게시하기'}
          </Button>
        </>
      )}
    </Container>
  );
};

export default Community;