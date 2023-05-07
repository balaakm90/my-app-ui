import './Blog.css'
import { useState, useEffect } from 'react';
import { getBlogList } from '../../Generic/Functions';
export const Blog = (props) => {
    const [blogs, setBlogs] = useState(null);
    useEffect(() => {
        setBlogs(getBlogList());
    }, [blogs]);
    return (
        <div className="blog-page">
            <div className="blog-page-left">
                <div className="blog-left-list">
                    <h2>Your blogs</h2>
                    <ul>
                        {
                            (blogs != null) ? (
                                blogs.map(x => {
                                    return (
                                        <li>{x.title}</li>
                                    )
                                })
                            ) : ('')
                        }
                    </ul>
                </div>
            </div>
            <div className="blog-page-right">
                <div className="blog-add-controls">
                    <span className="blog-add-link">+</span>
                    <span className="blog-add-text">Add New Blog</span>
                </div>
                <div className="blog-list">
                    {
                        (blogs != null) ? (
                            blogs.map(x => {
                                return (
                                    <div className="blog-tile">
                                        <h2>{x.title}</h2>
                                        <p>{x.desc}</p>
                                    </div>
                                )
                            })
                        ) : ('')
                    }
                </div>
            </div>
        </div >
    );
};