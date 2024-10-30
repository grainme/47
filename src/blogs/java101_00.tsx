import React from 'react';

const BlogPost = () => {
  const blogData = {
    "title": "Java String Memory Management: Pool, Immutability, and Optimization Mechanisms",
    "content": "In Java, String literals like \"Marouane\" are automatically stored in the String Pool (a special memory area in the heap) and reused when the same literal is encountered again, which explains why variables referencing the same literal share the same memory address (verified by == operator). However, using new String() explicitly creates a new object in the regular heap memory, causing different references despite identical content. When string concatenation occurs, a new String object is created while the original remains in the pool, demonstrating String immutability. The code also contrasts two approaches to string manipulation: the inefficient += operator which creates a new String object in each iteration versus the efficient StringBuilder which modifies its internal character array in-place.\n\nThis architecture offers several crucial memory management benefits: First, memory efficiency is achieved as multiple variables (like String a = \"hello\", b = \"hello\", c = \"hello\") can reference the same pooled object instead of creating duplicates. Second, thread safety is guaranteed as immutable strings can be safely shared across multiple threads without synchronization. Third, security is enhanced because string contents cannot be modified after creation, preventing malicious alterations. Fourth, the system enables predictable memory usage patterns since developers can precisely track when new string objects are created, making garbage collection more efficient.\n\nOne of the most significant optimizations enabled by string immutability is hash code caching. The String class maintains a private hash field to store the calculated hash code. When a string's hashCode() method is called, it first checks if the hash has been calculated (hash != 0). If not, it performs the calculation and caches the result; subsequent calls simply return the cached value. This optimization is particularly crucial for hash-based collections like HashMap, where strings are commonly used as keys. Without immutability, any string modification would require hash recalculation, potentially breaking hash-based data structures and degrading performance. For example, a mutable string changing from \"hello\" to \"helloworld\" would need its hash recalculated, whereas Java's immutable strings calculate the hash once and reuse it throughout the string's lifecycle. This caching mechanism, combined with string pooling and immutability, creates a highly efficient memory management system that optimizes both space usage and performance in Java applications."
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white text-black">
      <a href="/" className="text-blue-600 mb-6 inline-block hover:underline">
        ← Back to Home
      </a>
      
      <h1 className="text-3xl font-serif border-b border-black pb-3 mb-6">
        {blogData.title}
      </h1>
      
      <div className="prose prose-lg">
        {blogData.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 font-serif leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {blogData.codeExamples && (
        <div className="mt-8">
          <h2 className="text-2xl font-serif mb-4">Code Examples</h2>
          {Object.entries(blogData.codeExamples).map(([title, code]) => (
            <div key={title} className="mb-6">
              <h3 className="text-xl font-serif mb-2 capitalize">
                {title.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{code}</code>
              </pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPost;
