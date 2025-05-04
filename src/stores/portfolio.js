import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    artist: {
      name: 'Fueny',
      title: 'ML工程师 / 前端开发',
      bio: '我专注于机器学习模式与人类体验之间的微妙联系，通过创新算法和直观界面，从日常交互中捕捉非凡洞察。我的工作融合优雅的代码工艺与现代设计理念，旨在以清晰和精准的方式传递深刻的影响力。',
      longBio: '我是一位来自中国的机器学习工程师与前端设计师，在过去几年中，我致力于"connect the dots"的学习理念，通过将数据洞察、算法创新与用户体验设计相融合，构建出直观且高效的数字化解决方案。我的项目灵感来源于对复杂问题拆解与重构的热情，结合东方哲学中的整体思维与现代技术的精准表达，力求在代码与界面的交织中创造出既实用又富于美感的用户体验。',
      portrait: 'https://images.unsplash.com/photo-1715148470008-329758d3ace7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fE4wU0oxMDNESTFZfHxlbnwwfHx8fHw%3D',
      workingPhoto: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    philosophy: {
      title: '点悟',
      description: '点悟是我创立的一种思维方法论，旨在通过连接不同领域的知识点，发现创新的解决方案。这一理念源于东方哲学中的"顿悟"概念，结合了现代数据科学中的模式识别和关联分析。点悟强调在看似无关的信息之间建立联系，通过跨领域思考激发创新，并将复杂问题分解为可理解、可解决的组成部分。这种方法不仅适用于技术开发，也适用于产品设计、用户体验优化和商业战略制定。',
      keyPoints: [
        '跨领域知识整合',
        '模式识别与关联分析',
        '复杂问题分解与重构',
        '直觉与数据驱动相结合',
        '持续学习与迭代改进'
      ]
    },
    works: [
      {
        id: 1,
        title: '智能推荐系统',
        category: '机器学习',
        year: '2023',
        description: '基于深度学习的个性化内容推荐系统，提高用户参与度和满意度。',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: true
      },
      {
        id: 2,
        title: '大模型应用开发框架',
        category: 'LLM开发',
        year: '2023',
        description: '设计并实现基于大型语言模型的应用开发框架，支持多模态输入、上下文管理和知识库集成，简化AI应用开发流程。',
        image: 'https://images.unsplash.com/photo-1712002641088-9d76f9080889?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpfGVufDB8fDB8fHww',
        featured: true
      },
      {
        id: 3,
        title: '自然语言处理应用',
        category: '机器学习',
        year: '2022',
        description: '开发情感分析和文本分类工具，提取文本数据中的关键洞察。',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: true
      },
      {
        id: 4,
        title: '用户体验重设计',
        category: 'UI/UX设计',
        year: '2021',
        description: '重新设计现有应用的用户界面，提高可用性和用户满意度。',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: false
      },
      {
        id: 5,
        title: '预测分析工具',
        category: '数据分析',
        year: '2021',
        description: '开发预测模型，帮助企业预测趋势并做出数据驱动的决策。',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: false
      },
      {
        id: 6,
        title: '算法优化项目',
        category: '算法优化',
        year: '2020',
        description: '优化现有算法，提高处理效率和准确性，减少计算资源消耗。',
        image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: false
      }
    ],
    exhibitions: [
      {
        year: '2022',
        title: 'chatgpt首批入圈',
        location: 'Early Adopter of ChatGPT Technology'
      },
      {
        year: '2023',
        title: '开启langchain构建',
        location: 'Development of LangChain Applications'
      },
      {
        year: '2024',
        title: 'connect the dots 主题确立',
        location: 'Establishment of "Connect the Dots" Philosophy'
      },
      {
        year: '2025',
        title: '成立点悟',
        location: '点醒知识的星散片段，以哲思为引，灵感乍现，串联成深邃而和谐的启迪。'
      }
    ],
    skills: [
      { name: '机器学习', level: 95 },
      { name: '前端开发', level: 90 },
      { name: '数据分析', level: 85 },
      { name: 'UI/UX设计', level: 80 },
      { name: '算法优化', level: 75 }
    ],
    social: [
      { name: 'Instagram', icon: 'bi-instagram', url: 'https://instagram.com' },
      { name: 'X', icon: 'bi-twitter-x', url: 'https://x.com' },
      { name: 'GitHub', icon: 'bi-github', url: 'https://github.com/fueny' },
      { name: 'LinkedIn', icon: 'bi-linkedin', url: 'https://linkedin.com' }
    ],
    contact: {
      email: 'git7fueny@gmail.com',
      phone: '15047314288',
      address: '线上'
    }
  }),
  getters: {
    featuredWorks: (state) => state.works.filter(work => work.featured)
  }
})
