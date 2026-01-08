// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

// 页面基础配置
const pageConfig: PageConfig = {
  title: "枕上诗书闲的Serverless服务监控",
  links: [
    { link: 'https://github.com/hantianzhun', label: 'GitHub' },
  ],
}

// 核心监控配置
const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 10,
  // 如果需要给状态页加锁，请取消下面一行的注释并修改用户名密码
  // passwordProtection: 'admin:password123',
  
  monitors: [
  {
    id: 'um2_new',
    name: '音乐解锁 (new)',
    method: 'GET',
    target: 'https://um2.hanli.dpdns.org/',
    statusPageLink: 'https://um2.hanli.dpdns.org/',
  },
  {
    id: 'um1_old',
    name: '音乐解锁 (old)',
    method: 'GET',
    target: 'https://um1.hanli.dpdns.org/',
    statusPageLink: 'https://um1.hanli.dpdns.org/',
  },
  {
    id: 'blog_overseas',
    name: '枕上诗书闲的博客 (国外)',
    method: 'GET',
    target: 'https://hanli.kesug.com/',
    statusPageLink: 'http://hanli.kesug.com/',
  },
  {
    id: 'blog_github',
    name: '枕上诗书闲的博客 (GitHub)',
    method: 'GET',
    target: 'https://hantianzhun.github.io/blog/',
    statusPageLink: 'https://hantianzhun.github.io/blog/',
  },
  {
    id: 'sub_reminder',
    name: '订阅提醒',
    method: 'GET',
    target: 'https://sub.587459.xyz/',
    statusPageLink: 'https://sub.587459.xyz/',
  },
  {
    id: 'tts_service',
    name: 'TTS 服务',
    method: 'GET',
    target: 'https://tts.hanli.dpdns.org/',
    statusPageLink: 'https://tts.hanli.dpdns.org/',
  },
  {
    id: 'short_url',
    name: '短链管理',
    method: 'GET',
    target: 'https://short.hanli.dpdns.org/',
    statusPageLink: 'https://short.hanli.dpdns.org/',
  },
  {
    id: 'alle_mail',
    name: 'Alle 邮件聚合',
    method: 'GET',
    target: 'https://alle.587459.xyz/',
    statusPageLink: 'https://alle.587459.xyz/',
  },
  {
    id: 'git_proxy',
    name: 'GitHub 加速',
    method: 'GET',
    target: 'https://git.587459.xyz/',
    statusPageLink: 'https://git.587459.xyz/',
  },
  {
    id: 'image_hosting',
    name: '枕上诗书闲的图床',
    method: 'GET',
    target: 'https://img.587459.xyz/',
    statusPageLink: 'https://img.587459.xyz/',
  },
  {
    id: 'tv_service',
    name: 'halen的tv',
    method: 'GET',
    target: 'https://tv.halen.dpdns.org/',
    statusPageLink: 'https://tv.halen.dpdns.org/',
  },
],

  
  // 留空通知配置
  notification: {}
}

// 留空维护配置（必需保留变量定义以防部署失败）
const maintenances: MaintenanceConfig[] = []

export { pageConfig, workerConfig, maintenances }
