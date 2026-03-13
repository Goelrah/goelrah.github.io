import { useState, useEffect } from 'react'
import { Plus, Edit3, Trash2, Eye, ArrowLeft, Search, Filter, Calendar, Clock } from 'lucide-react'
import { blogStore } from '../utils/blogStore'

// Blog categories for SEO
const categories = [
  'GenAI in Enterprise',
  'Cloud Optimization',
  'TPM Playbooks',
  'Distributed Systems',
  'Engineering Leadership',
  'AI Automation',
]

// Sample posts for initial content
const samplePosts = [
  {
    id: '1',
    title: 'Building Production RAG Systems: Lessons from AskGenie',
    slug: 'building-production-rag-systems',
    content: `# Building Production RAG Systems: Lessons from AskGenie

After deploying AskGenie—our enterprise RAG system on AWS Bedrock—I learned that the gap between a working demo and production system is massive. Here's what actually matters.

## The 80/20 of RAG Quality

Most RAG tutorials focus on embeddings and vector databases. In production, **chunking strategy** determines 80% of your answer quality. We tested 12 different approaches before landing on semantic chunking with overlap.

## Key Lessons

1. **Chunk size matters more than embedding model** - 512 tokens with 50 token overlap worked best for our documentation
2. **Hybrid search beats pure semantic** - Combining BM25 with vector search improved relevance by 35%
3. **Citation tracking is non-negotiable** - Users need to verify AI answers, especially for compliance

## Production Considerations

- Implement rate limiting early
- Cache embeddings aggressively
- Monitor hallucination rates weekly
- Build feedback loops into the UI

The $2.3M ROI came from reduced search time, not from the AI being "smart." It's about getting the right information to the right person faster.`,
    category: 'GenAI in Enterprise',
    tags: ['RAG', 'AWS Bedrock', 'LangChain', 'Production ML'],
    status: 'published',
    createdAt: '2026-03-10T10:00:00Z',
    updatedAt: '2026-03-10T10:00:00Z',
  },
  {
    id: '2',
    title: 'The 4-Week FinOps Sprint: A Practical Guide',
    slug: 'finops-sprint-practical-guide',
    content: `# The 4-Week FinOps Sprint: A Practical Guide

When I inherited a $162M AWS portfolio with 30% YoY growth and zero cost accountability, I needed a fast, repeatable approach. Here's the sprint framework that delivered $8M/year in savings.

## Week 1: Discovery & Tagging

- Audit current tagging compliance (we were at 23%)
- Implement automated tagging via Terraform
- Build cost allocation views by team/service

## Week 2: Quick Wins

- Identify and terminate zombie resources
- Rightsize obviously oversized instances
- Convert stable workloads to Reserved Instances

## Week 3: Governance Setup

- Create cost dashboards per team
- Establish monthly review cadence
- Define escalation thresholds

## Week 4: Culture Building

- Train team leads on cost ownership
- Celebrate wins publicly
- Document the "why" behind decisions

The key insight: **cost optimization is a culture problem, not a technical problem.** Tools help, but accountability drives results.`,
    category: 'Cloud FinOps',
    tags: ['AWS', 'Cost Optimization', 'FinOps', 'Cloud Governance'],
    status: 'published',
    createdAt: '2026-03-05T10:00:00Z',
    updatedAt: '2026-03-05T10:00:00Z',
  },
  {
    id: '3',
    title: 'TPM Architecture Reviews: Asking the Right Questions',
    slug: 'tpm-architecture-reviews',
    content: `# TPM Architecture Reviews: Asking the Right Questions

You don't need to be the technical expert to lead effective architecture reviews. You need to ask questions that surface risks and ensure alignment with business goals.

## The TPM's Architecture Review Framework

### Business Alignment Questions
- What business problem does this solve?
- How will we measure success?
- What's the cost of delay?

### Risk Identification Questions
- What's the blast radius if this fails?
- What are the dependencies we don't control?
- What's our rollback plan?

### Operational Readiness Questions
- Who gets paged when this breaks at 3 AM?
- What does the runbook look like?
- How do we know it's working?

## The Meta-Skill

The best TPMs don't pretend to know everything. They create space for engineers to think through implications they might have missed. Your job is to be the "designated worrier" so the team can focus on building.`,
    category: 'TPM Playbooks',
    tags: ['TPM', 'Architecture', 'Program Management', 'Leadership'],
    status: 'published',
    createdAt: '2026-02-28T10:00:00Z',
    updatedAt: '2026-02-28T10:00:00Z',
  },
]

// Initialize sample posts
const initializeSamplePosts = () => {
  const existingPosts = blogStore.getPosts()
  if (existingPosts.length === 0) {
    samplePosts.forEach(post => blogStore.savePost(post))
  }
}

export default function Blog({ blogView, setBlogView, selectedPost, setSelectedPost }) {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [statusFilter, setStatusFilter] = useState('published')
  const [editingPost, setEditingPost] = useState(null)

  // Initialize and load posts
  useEffect(() => {
    initializeSamplePosts()
    loadPosts()
  }, [])

  // Filter posts when filters change
  useEffect(() => {
    let filtered = posts

    if (statusFilter !== 'all') {
      filtered = filtered.filter(p => p.status === statusFilter)
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.content.toLowerCase().includes(query)
      )
    }

    setFilteredPosts(filtered)
  }, [posts, statusFilter, selectedCategory, searchQuery])

  const loadPosts = () => {
    const allPosts = blogStore.getPosts()
    setPosts(allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
  }

  const handleNewPost = () => {
    setEditingPost({
      id: '',
      title: '',
      slug: '',
      content: '',
      category: categories[0],
      tags: [],
      status: 'draft',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
    setBlogView('editor')
  }

  const handleEditPost = (post) => {
    setEditingPost(post)
    setBlogView('editor')
  }

  const handleViewPost = (post) => {
    setSelectedPost(post)
    setBlogView('post')
  }

  const handleDeletePost = (slug) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      blogStore.deletePost(slug)
      loadPosts()
    }
  }

  const handleSavePost = (post) => {
    blogStore.savePost(post)
    loadPosts()
    setBlogView('list')
    setEditingPost(null)
  }

  const handleBackToList = () => {
    setBlogView('list')
    setSelectedPost(null)
    setEditingPost(null)
  }

  // Render based on view
  if (blogView === 'editor') {
    return <BlogEditor post={editingPost} onSave={handleSavePost} onCancel={handleBackToList} categories={categories} />
  }

  if (blogView === 'post' && selectedPost) {
    return <BlogPost post={selectedPost} onBack={handleBackToList} />
  }

  // Default: List view
  return (
    <section id="blog" className="relative bg-surface-900/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="tag mb-4">Blog</span>
          <h2 className="section-title text-white">
            Insights on <span className="gradient-text">GenAI, Cloud & Engineering Leadership</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Practical insights for VP Engineering, CTOs, Heads of Product, and senior TPMs 
            navigating cloud architecture, GenAI adoption, and program governance.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-500" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-12"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field md:w-48"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button onClick={handleNewPost} className="btn-primary">
            <Plus className="w-5 h-5" />
            New Post
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="glass-card overflow-hidden card-hover animate-on-scroll group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="tag text-xs">{post.category}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    post.status === 'published' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {post.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-sm text-surface-400 mb-4 line-clamp-3">
                  {post.content.replace(/[#*`]/g, '').slice(0, 150)}...
                </p>

                <div className="flex items-center gap-4 text-xs text-surface-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {Math.ceil(post.content.split(' ').length / 200)} min read
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleViewPost(post)}
                    className="btn-ghost text-sm flex-1"
                  >
                    <Eye className="w-4 h-4" />
                    Read
                  </button>
                  <button
                    onClick={() => handleEditPost(post)}
                    className="btn-ghost text-sm"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.slug)}
                    className="btn-ghost text-sm text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-surface-400">No posts found. Create your first post!</p>
          </div>
        )}
      </div>
    </section>
  )
}

// Blog Editor Component
function BlogEditor({ post, onSave, onCancel, categories }) {
  const [formData, setFormData] = useState(post)
  const [tagsInput, setTagsInput] = useState(post.tags?.join(', ') || '')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }

  const handleSubmit = (status) => {
    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean)
    const updatedPost = {
      ...formData,
      id: formData.id || Date.now().toString(),
      tags,
      status,
      updatedAt: new Date().toISOString(),
    }
    onSave(updatedPost)
  }

  return (
    <section id="blog" className="relative bg-surface-900/30">
      <div className="section-container max-w-4xl">
        <button onClick={onCancel} className="btn-ghost mb-6">
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </button>

        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            {post.id ? 'Edit Post' : 'Create New Post'}
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-surface-300 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter post title..."
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-surface-300 mb-2">Slug</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="auto-generated-from-title"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-surface-300 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input-field"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-surface-300 mb-2">Tags (comma-separated)</label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="AWS, GenAI, Cost Optimization"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-surface-300 mb-2">Content (Markdown supported)</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your post content here..."
                rows={20}
                className="textarea-field font-mono text-sm"
              />
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-surface-700">
              <button onClick={() => handleSubmit('draft')} className="btn-secondary">
                Save as Draft
              </button>
              <button onClick={() => handleSubmit('published')} className="btn-primary">
                Publish
              </button>
              <button onClick={onCancel} className="btn-ghost ml-auto">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Blog Post View Component
function BlogPost({ post, onBack }) {
  // Simple markdown-to-HTML conversion
  const renderContent = (content) => {
    return content
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('# ')) {
          return <h1 key={i} className="text-3xl font-bold text-white mt-8 mb-4">{line.slice(2)}</h1>
        }
        if (line.startsWith('## ')) {
          return <h2 key={i} className="text-2xl font-bold text-white mt-6 mb-3">{line.slice(3)}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={i} className="text-xl font-semibold text-white mt-4 mb-2">{line.slice(4)}</h3>
        }
        if (line.startsWith('- ')) {
          return <li key={i} className="text-surface-300 ml-6 mb-1">{line.slice(2)}</li>
        }
        if (line.match(/^\d+\. /)) {
          return <li key={i} className="text-surface-300 ml-6 mb-1 list-decimal">{line.replace(/^\d+\. /, '')}</li>
        }
        if (line.trim() === '') {
          return <br key={i} />
        }
        // Handle bold text
        const boldProcessed = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        return <p key={i} className="text-surface-300 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: boldProcessed }} />
      })
  }

  return (
    <section id="blog" className="relative">
      <div className="section-container max-w-4xl">
        <button onClick={onBack} className="btn-ghost mb-6">
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </button>

        <article className="glass-card p-8 lg:p-12">
          <header className="mb-8 pb-8 border-b border-surface-700">
            <span className="tag mb-4">{post.category}</span>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-surface-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {Math.ceil(post.content.split(' ').length / 200)} min read
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags?.map(tag => (
                <span key={tag} className="tag text-xs">{tag}</span>
              ))}
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </div>
        </article>
      </div>
    </section>
  )
}