---
title: AI 导航
date: 2025-12-18 00:00:00
comments: false
---

<style>
.ai-nav-section { margin-top: 1.25rem; }
.ai-nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
  margin-top: 12px;
}
.ai-nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.02);
  text-decoration: none;
  min-height: 48px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease;
}
.ai-nav-item:hover {
  background: rgba(55, 198, 192, 0.08);
  border-color: rgba(55, 198, 192, 0.35);
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}
.ai-nav-icon {
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  margin: 0 !important;
  display: block;
  object-fit: contain;
  border-radius: 6px;
}
.ai-nav-name { font-weight: 600; }
@media (prefers-color-scheme: dark) {
  .ai-nav-item {
    border-color: rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
  }
  .ai-nav-item:hover {
    background: rgba(55, 198, 192, 0.12);
    border-color: rgba(55, 198, 192, 0.45);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.5);
  }
}
</style>

## 对话 / 搜索

<div class="ai-nav-grid">
  <a class="ai-nav-item" href="https://chat.openai.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/chat.openai.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">ChatGPT</span>
  </a>
  <a class="ai-nav-item" href="https://claude.ai/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/claude.ai?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Claude</span>
  </a>
  <a class="ai-nav-item" href="https://gemini.google.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/gemini.google.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Gemini</span>
  </a>
  <a class="ai-nav-item" href="https://www.perplexity.ai/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/perplexity.ai?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Perplexity</span>
  </a>
  <a class="ai-nav-item" href="https://x.ai/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/x.ai?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Grok</span>
  </a>
  <a class="ai-nav-item" href="https://chat.deepseek.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/chat.deepseek.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">DeepSeek</span>
  </a>
  <a class="ai-nav-item" href="https://kimi.moonshot.cn/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/kimi.moonshot.cn?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Kimi</span>
  </a>
  <a class="ai-nav-item" href="https://tongyi.aliyun.com/qianwen/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/tongyi.aliyun.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">通义千问</span>
  </a>
  <a class="ai-nav-item" href="https://yiyan.baidu.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/yiyan.baidu.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">文心一言</span>
  </a>
  <a class="ai-nav-item" href="https://www.doubao.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/www.doubao.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">豆包</span>
  </a>
</div>

## 编程 / 开发

<div class="ai-nav-grid">
  <a class="ai-nav-item" href="https://github.com/features/copilot" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/github.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">GitHub Copilot</span>
  </a>
  <a class="ai-nav-item" href="https://www.cursor.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/www.cursor.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Cursor</span>
  </a>
  <a class="ai-nav-item" href="https://codeium.com/windsurf" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/codeium.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Windsurf</span>
  </a>
  <a class="ai-nav-item" href="https://codeium.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/codeium.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Codeium</span>
  </a>
  <a class="ai-nav-item" href="https://www.tabnine.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/www.tabnine.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Tabnine</span>
  </a>
  <a class="ai-nav-item" href="https://sourcegraph.com/cody" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/sourcegraph.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Sourcegraph Cody</span>
  </a>
</div>

## 图片生成

<div class="ai-nav-grid">
  <a class="ai-nav-item" href="https://www.midjourney.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/www.midjourney.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Midjourney</span>
  </a>
  <a class="ai-nav-item" href="https://openai.com/index/dall-e-3/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/openai.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">DALL·E</span>
  </a>
  <a class="ai-nav-item" href="https://stability.ai/stable-diffusion" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/stability.ai?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Stable Diffusion</span>
  </a>
  <a class="ai-nav-item" href="https://leonardo.ai/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/leonardo.ai?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Leonardo AI</span>
  </a>
  <a class="ai-nav-item" href="https://ideogram.ai/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/ideogram.ai?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Ideogram</span>
  </a>
  <a class="ai-nav-item" href="https://playground.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/playground.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Playground</span>
  </a>
</div>

## 视频生成

<div class="ai-nav-grid">
  <a class="ai-nav-item" href="https://runwayml.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/runwayml.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Runway</span>
  </a>
  <a class="ai-nav-item" href="https://pika.art/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/pika.art?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Pika</span>
  </a>
  <a class="ai-nav-item" href="https://lumalabs.ai/dream-machine" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/lumalabs.ai?larger=true" alt="" loading="lazy" style="background-color: #000;" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Luma Dream Machine</span>
  </a>
  <a class="ai-nav-item" href="https://openai.com/sora" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/openai.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Sora</span>
  </a>
  <a class="ai-nav-item" href="https://klingai.kuaishou.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/klingai.kuaishou.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">可灵</span>
  </a>
  <a class="ai-nav-item" href="https://hailuoai.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/hailuoai.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">海螺</span>
  </a>
</div>

## 音频 / 语音

<div class="ai-nav-grid">
  <a class="ai-nav-item" href="https://elevenlabs.io/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/elevenlabs.io?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">ElevenLabs</span>
  </a>
  <a class="ai-nav-item" href="https://suno.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/suno.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Suno</span>
  </a>
  <a class="ai-nav-item" href="https://www.udio.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/www.udio.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Udio</span>
  </a>
  <a class="ai-nav-item" href="https://openai.com/research/whisper" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/openai.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Whisper</span>
  </a>
</div>

## 工作流 / Agent

<div class="ai-nav-grid">
  <a class="ai-nav-item" href="https://dify.ai/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/dify.ai?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Dify</span>
  </a>
  <a class="ai-nav-item" href="https://flowiseai.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/flowiseai.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Flowise</span>
  </a>
  <a class="ai-nav-item" href="https://www.langchain.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/www.langchain.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">LangChain</span>
  </a>
  <a class="ai-nav-item" href="https://www.llamaindex.ai/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/www.llamaindex.ai?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">LlamaIndex</span>
  </a>
  <a class="ai-nav-item" href="https://n8n.io/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/n8n.io?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">n8n</span>
  </a>
  <a class="ai-nav-item" href="https://zapier.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/zapier.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Zapier</span>
  </a>
</div>

## 模型 / 部署

<div class="ai-nav-grid">
  <a class="ai-nav-item" href="https://huggingface.co/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/huggingface.co?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Hugging Face</span>
  </a>
  <a class="ai-nav-item" href="https://openrouter.ai/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/openrouter.ai?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">OpenRouter</span>
  </a>
  <a class="ai-nav-item" href="https://replicate.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/replicate.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Replicate</span>
  </a>
  <a class="ai-nav-item" href="https://ollama.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/ollama.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Ollama</span>
  </a>
  <a class="ai-nav-item" href="https://lmstudio.ai/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/lmstudio.ai?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">LM Studio</span>
  </a>
</div>

## 提示词 / 聚合

<div class="ai-nav-grid">
  <a class="ai-nav-item" href="https://promptperfect.jina.ai/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/promptperfect.jina.ai?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">PromptPerfect</span>
  </a>
  <a class="ai-nav-item" href="https://flowgpt.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/flowgpt.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">FlowGPT</span>
  </a>
  <a class="ai-nav-item" href="https://www.aiprm.com/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/www.aiprm.com?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">AIPRM</span>
  </a>
  <a class="ai-nav-item" href="https://www.futurepedia.io/" target="_blank" rel="noopener">
    <img class="ai-nav-icon" src="https://favicon.im/www.futurepedia.io?larger=true" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <span class="ai-nav-name">Futurepedia</span>
  </a>
</div>
