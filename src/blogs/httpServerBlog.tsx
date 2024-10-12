import React from 'react';
import { Link } from 'react-router-dom';
import blogData from './data/httpServer.json';

const Blog: React.FC = () => {
  return (
    <div style={{
      fontFamily: 'Times New Roman, serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#FFFFFF',
      color: '#000000',
      lineHeight: '1.6'
    }}>
      <Link to="/" style={{ color: 'blue', marginBottom: '20px', display: 'inline-block' }}>← Back to Home</Link>
      <h1 style={{
        borderBottom: '1px solid #000000',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        {blogData.title}
      </h1>
      <div style={{
        whiteSpace: 'pre-wrap'
      }}>
        {blogData.content.split('\n\n').map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '1em' }}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Blog;
