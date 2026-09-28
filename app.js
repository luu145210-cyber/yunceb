const services = [
  {
    id: "yuntu-airport",
    name: "云图机场",
    subtitle: "AI 助手 · 晚高峰稳定",
    mark: "云",
    color: "#4f837d",
    editorRank: 1,
    score: 93.4,
    stability: 98.2,
    speed: 94.1,
    value: 88,
    stream: 100,
    price: 20,
    annual: 120,
    traffic: "150 GB",
    devices: "5 台",
    region: ["global", "asia"],
    tags: ["稳定", "低延迟", "流媒体", "多设备"],
    summary: "面向长期使用的 AI 助手方案，用户反馈晚高峰连接表现稳定，并支持多设备同时使用。",
    update: "09.27.2026",
    location: "香港 / 日本 / 美国 / 欧洲 / 东南亚 / 南美洲",
    platforms: "Windows / macOS / iOS / Android",
    refund: "虚拟产品不可退款",
    support: "24 小时在线客服、工单、邮件",
    trend: [93, 96, 95, 98, 97, 98, 98],
    dataSource: "用户提供的公开资料，待独立复测",
    scoreNote: "稳定性、速度、性价比三项平均值",
    official: "https://vip.ytjcok.org/#/register?code=Oxsv1mJl"
  },
  {
    id: "northline",
    name: "Northline",
    subtitle: "北线网络",
    mark: "N",
    color: "#597b73",
    editorRank: 3,
    score: 96.8,
    stability: 98.2,
    speed: 94.1,
    value: 88,
    stream: 96,
    price: 39,
    annual: 358,
    traffic: "200 GB",
    devices: "5 台",
    region: ["global", "asia", "na", "eu"],
    tags: ["低延迟", "流媒体"],
    summary: "晚高峰依然保持很好的连接稳定性，适合需要长期使用和多设备切换的人。",
    update: "09.26.2026",
    location: "香港 / 日本 / 美国 / 欧洲",
    platforms: "Windows / macOS / iOS / Android",
    refund: "7 天内可申请退款",
    support: "工单 + 邮件，平均 6 小时响应",
    trend: [72, 86, 78, 94, 88, 95, 98],
    official: "#northline"
  },
  {
    id: "shunyun-airport",
    name: "瞬云机场",
    subtitle: "轻量入门 · 多设备方案",
    mark: "瞬",
    color: "#587c9c",
    editorRank: 2,
    score: 90.8,
    stability: 92.6,
    speed: 91.4,
    value: 94,
    stream: 88,
    price: 28,
    annual: 268,
    traffic: "200 GB",
    devices: "5 台",
    region: ["global", "asia", "na", "eu"],
    tags: ["高性价比", "多设备", "套餐灵活", "待核实"],
    summary: "瞬云机场是一项面向日常跨地区网络访问、流媒体和 AI 工具使用场景的订阅服务。本页内容为 SEO/GEO 编辑草稿，适合用于初步了解服务定位，具体套餐与线路表现请以官网为准。",
    update: "09.27.2026",
    location: "亚洲 / 北美 / 欧洲等地区（待核实）",
    platforms: "Windows / macOS / iOS / Android（待核实）",
    refund: "以官网当前条款为准",
    support: "以官网实际客服渠道为准",
    trend: [78, 82, 80, 86, 84, 88, 87],
    dataSource: "官网基础信息有限，以下套餐、评分与能力标签为编辑生成草稿，待独立复测",
    scoreNote: "SEO/GEO 内容估算，不代表独立测试结果",
    official: "https://ccc.jichang.best/#/register?code=4vNYA1SS"
  },
  {
    id: "orbit-link",
    name: "Orbit Link",
    subtitle: "轨道连接",
    mark: "O",
    color: "#bf7650",
    score: 95.6,
    stability: 94.8,
    speed: 97.5,
    value: 91,
    stream: 98,
    price: 49,
    annual: 428,
    traffic: "300 GB",
    devices: "6 台",
    region: ["global", "asia", "na"],
    tags: ["速度快", "AI 服务"],
    summary: "当前测速榜的速度冠军，适合视频会议、云端开发和对峰值速度敏感的用户。",
    update: "09.27.2026",
    location: "香港 / 新加坡 / 美国 / 日本",
    platforms: "Windows / macOS / Linux / iOS / Android",
    refund: "3 天内可申请退款",
    support: "在线客服，平均 2 小时响应",
    trend: [74, 81, 89, 93, 95, 97, 100],
    official: "#orbit-link"
  },
  {
    id: "cloudmile",
    name: "CloudMile",
    subtitle: "云端里程",
    mark: "C",
    color: "#886b9e",
    score: 94.9,
    stability: 96.1,
    speed: 91.4,
    value: 95,
    stream: 92,
    price: 29,
    annual: 268,
    traffic: "180 GB",
    devices: "4 台",
    region: ["global", "asia", "eu"],
    tags: ["高性价比", "新手友好"],
    summary: "套餐结构简单、价格友好，基础体验稳定，是预算敏感用户的均衡选择。",
    update: "09.25.2026",
    location: "香港 / 台湾 / 日本 / 欧洲",
    platforms: "Windows / macOS / iOS / Android",
    refund: "7 天内可申请退款",
    support: "邮件，平均 12 小时响应",
    trend: [78, 75, 81, 80, 87, 85, 82],
    official: "#cloudmile"
  },
  {
    id: "pine-route",
    name: "Pine Route",
    subtitle: "松路网络",
    mark: "P",
    color: "#5f8a9a",
    score: 93.8,
    stability: 95.4,
    speed: 89.8,
    value: 93,
    stream: 90,
    price: 35,
    annual: 320,
    traffic: "250 GB",
    devices: "5 台",
    region: ["global", "asia", "na", "eu"],
    tags: ["稳定", "多设备"],
    summary: "节点数量适中但线路质量扎实，适合家庭用户和不想频繁折腾设置的人。",
    update: "09.24.2026",
    location: "香港 / 日本 / 美国 / 欧洲",
    platforms: "Windows / macOS / iOS / Android / Linux",
    refund: "5 天内可申请退款",
    support: "工单，平均 8 小时响应",
    trend: [84, 89, 86, 91, 90, 95, 94],
    official: "#pine-route"
  },
  {
    id: "mono-grid",
    name: "MonoGrid",
    subtitle: "单格矩阵",
    mark: "M",
    color: "#bd9a4f",
    score: 92.7,
    stability: 91.2,
    speed: 92.6,
    value: 90,
    stream: 94,
    price: 45,
    annual: 399,
    traffic: "500 GB",
    devices: "8 台",
    region: ["global", "na", "eu"],
    tags: ["大流量", "多设备"],
    summary: "大流量和设备数是主要优势，适合家庭共享以及有较高月度用量的人。",
    update: "09.23.2026",
    location: "美国 / 加拿大 / 欧洲 / 日本",
    platforms: "Windows / macOS / iOS / Android / Linux",
    refund: "不支持退款",
    support: "工单，平均 18 小时响应",
    trend: [82, 85, 85, 80, 89, 92, 90],
    official: "#monogrid"
  },
  {
    id: "daybreak",
    name: "Daybreak",
    subtitle: "晨曦线路",
    mark: "D",
    color: "#c87970",
    score: 91.5,
    stability: 90.4,
    speed: 90.2,
    value: 96,
    stream: 88,
    price: 19,
    annual: 188,
    traffic: "100 GB",
    devices: "3 台",
    region: ["global", "asia"],
    tags: ["入门", "月付友好"],
    summary: "低门槛的入门方案，适合先体验再决定是否长期订阅的用户。",
    update: "09.21.2026",
    location: "香港 / 日本 / 新加坡",
    platforms: "Windows / macOS / iOS / Android",
    refund: "3 天内可申请退款",
    support: "邮件，平均 16 小时响应",
    trend: [70, 73, 75, 80, 78, 87, 88],
    official: "#daybreak"
  }
];

const state = {
  sort: "score",
  search: "",
  region: "global",
  budget: "all",
  selected: []
};

const rankingList = document.querySelector("#ranking-list");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const compareDock = document.querySelector("#compare-dock");
const compareDockItems = document.querySelector("#compare-dock-items");
const compareCount = document.querySelector("#compare-count");
const openCompareButton = document.querySelector("#open-compare");
const serviceModal = document.querySelector("#service-modal");
const compareModal = document.querySelector("#compare-modal");

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        "stroke-width": 1.8
      }
    });
  }
}

function renderMiniBars(service) {
  return `<div class="mini-bars" aria-label="近 7 次稳定性趋势">
    ${service.trend.map((height) => `<span style="height:${height}%"></span>`).join("")}
  </div>`;
}

function getFilteredServices() {
  const query = state.search.trim().toLowerCase();
  const filtered = services.filter((service) => {
    const matchesQuery = !query
      || `${service.name} ${service.subtitle} ${service.tags.join(" ")}`.toLowerCase().includes(query);
    const matchesRegion = service.region.includes(state.region);
    const matchesBudget = state.budget === "all"
      || (state.budget === "under50" && service.price <= 50)
      || (state.budget === "under100" && service.price <= 100);
    return matchesQuery && matchesRegion && matchesBudget;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "score") {
      return (a.editorRank ?? 99) - (b.editorRank ?? 99) || b.score - a.score;
    }
    return b[state.sort] - a[state.sort];
  });
}

function renderRankings() {
  const filtered = getFilteredServices();
  resultCount.textContent = `显示 ${filtered.length} 个服务`;
  emptyState.hidden = filtered.length > 0;
  rankingList.innerHTML = filtered
    .map((service, index) => `
      <article class="service-row" data-service-id="${service.id}">
        <span class="rank-number ${index < 3 ? "top-rank" : ""}">${String(index + 1).padStart(2, "0")}</span>
        <div class="service-identity" data-open-service="${service.id}" role="button" tabindex="0">
          <span class="service-logo" style="background:${service.color}">${service.mark}</span>
          <span class="service-name-block">
            <strong>${service.name}</strong>
            <span>${service.subtitle} · 更新于 ${service.update}</span>
          </span>
        </div>
        <div class="data-cell score-cell">
          <span class="data-cell-label">综合评分</span>
          <strong>${service.score}</strong>
          <small>/ 100</small>
        </div>
        <div class="data-cell">
          <span class="data-cell-label">稳定性</span>
          ${renderMiniBars(service)}
        </div>
        <div class="data-cell">
          <span class="data-cell-label">月付起</span>
          <strong>¥${service.price}</strong>
        </div>
        <div class="tag-list">
          ${service.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="row-actions">
          <button class="compare-check ${state.selected.includes(service.id) ? "selected" : ""}" type="button"
            data-toggle-compare="${service.id}" aria-label="加入对比" aria-pressed="${state.selected.includes(service.id)}">
            ${icon("check")}
          </button>
        </div>
      </article>
    `)
    .join("");
  refreshIcons();
}

function renderCompareDock() {
  const selectedServices = state.selected.map((id) => services.find((service) => service.id === id));
  compareDock.hidden = selectedServices.length === 0;
  compareCount.textContent = `已选择 ${selectedServices.length} 个服务`;
  openCompareButton.disabled = selectedServices.length < 2;
  compareDockItems.innerHTML = selectedServices
    .map((service) => `<span class="compare-item"><i style="background:${service.color}"></i>${service.name}</span>`)
    .join("");
  refreshIcons();
}

function toggleCompare(id) {
  if (state.selected.includes(id)) {
    state.selected = state.selected.filter((selectedId) => selectedId !== id);
  } else if (state.selected.length < 4) {
    state.selected.push(id);
  }
  renderRankings();
  renderCompareDock();
}

function renderServiceModal(service) {
  document.querySelector("#modal-content").innerHTML = `
    <div class="modal-topline">
      <div>
        <p class="eyebrow">SERVICE PROFILE / ${service.update}</p>
      </div>
      <button class="icon-button close-modal" type="button" aria-label="关闭详情">${icon("x")}</button>
    </div>
    <div class="modal-service-heading">
      <span class="service-logo" style="background:${service.color}">${service.mark}</span>
      <div>
        <h2>${service.name}</h2>
        <p>${service.subtitle} · 最近一次公开测试 ${service.update}</p>
      </div>
    </div>
    <div class="modal-score-grid">
      <div class="modal-score"><span>综合评分</span><strong>${service.score}</strong></div>
      <div class="modal-score"><span>稳定性</span><strong>${service.stability}</strong></div>
      <div class="modal-score"><span>速度</span><strong>${service.speed}</strong></div>
      <div class="modal-score"><span>性价比</span><strong>${service.value}</strong></div>
    </div>
    <p class="modal-description">${service.summary}</p>
    ${service.dataSource ? `<div class="data-disclosure ${service.id === "shunyun-airport" ? "draft-disclosure" : ""}"><span>${icon(service.id === "shunyun-airport" ? "triangle-alert" : "info")}</span><div><strong>${service.id === "shunyun-airport" ? "编辑草稿 / 待核实" : "数据来源"}</strong><p>${service.dataSource}。当前综合评分为${service.scoreNote}。</p></div></div>` : ""}
    <div class="detail-grid">
      <div class="detail-item"><span class="detail-label">套餐流量</span><strong>${service.traffic}</strong></div>
      <div class="detail-item"><span class="detail-label">设备数量</span><strong>${service.devices}</strong></div>
      <div class="detail-item"><span class="detail-label">年付价格</span><strong>¥${service.annual}</strong></div>
      <div class="detail-item"><span class="detail-label">测试地区</span><strong>${service.location}</strong></div>
      <div class="detail-item"><span class="detail-label">支持平台</span><strong>${service.platforms}</strong></div>
      <div class="detail-item"><span class="detail-label">退款政策</span><strong>${service.refund}</strong></div>
      <div class="detail-item"><span class="detail-label">客服支持</span><strong>${service.support}</strong></div>
    </div>
    <div class="modal-actions">
      <a href="${service.official}" class="secondary">查看套餐 ${icon("arrow-up-right")}</a>
      <button class="primary-button" data-modal-compare="${service.id}" type="button">
        ${state.selected.includes(service.id) ? "移出对比" : "加入对比"} ${icon("columns-3")}
      </button>
    </div>
  `;
  refreshIcons();
  serviceModal.showModal();
}

function renderCompareTable() {
  const selectedServices = state.selected.map((id) => services.find((service) => service.id === id));
  document.querySelector("#compare-table-wrap").innerHTML = `
    <div class="compare-table">
      <table>
        <thead>
          <tr>
            <th>比较项目</th>
            ${selectedServices.map((service) => `<th>${service.name}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          <tr><td>综合评分</td>${selectedServices.map((service) => `<td><strong>${service.score}</strong></td>`).join("")}</tr>
          <tr><td>稳定性</td>${selectedServices.map((service) => `<td>${service.stability}</td>`).join("")}</tr>
          <tr><td>速度</td>${selectedServices.map((service) => `<td>${service.speed}</td>`).join("")}</tr>
          <tr><td>性价比</td>${selectedServices.map((service) => `<td>${service.value}</td>`).join("")}</tr>
          <tr><td>月付起</td>${selectedServices.map((service) => `<td>¥${service.price}</td>`).join("")}</tr>
          <tr><td>流量</td>${selectedServices.map((service) => `<td>${service.traffic}</td>`).join("")}</tr>
          <tr><td>设备数</td>${selectedServices.map((service) => `<td>${service.devices}</td>`).join("")}</tr>
          <tr><td>流媒体 & AI</td>${selectedServices.map((service) => `<td>${service.stream}</td>`).join("")}</tr>
        </tbody>
      </table>
    </div>
  `;
}

document.addEventListener("click", (event) => {
  const compareTarget = event.target.closest("[data-toggle-compare]");
  if (compareTarget) {
    event.stopPropagation();
    toggleCompare(compareTarget.dataset.toggleCompare);
    return;
  }

  const serviceTarget = event.target.closest("[data-open-service]");
  if (serviceTarget) {
    const service = services.find((item) => item.id === serviceTarget.dataset.openService);
    if (service) renderServiceModal(service);
    return;
  }

  const modalCompareTarget = event.target.closest("[data-modal-compare]");
  if (modalCompareTarget) {
    toggleCompare(modalCompareTarget.dataset.modalCompare);
    const service = services.find((item) => item.id === modalCompareTarget.dataset.modalCompare);
    if (service) renderServiceModal(service);
    return;
  }

  if (event.target.closest(".close-modal")) {
    event.target.closest("dialog")?.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.matches("[data-open-service]")) {
    const service = services.find((item) => item.id === event.target.dataset.openService);
    if (service) renderServiceModal(service);
  }
});

document.querySelectorAll(".ranking-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".ranking-tab").forEach((item) => {
      item.classList.toggle("active", item === tab);
      item.setAttribute("aria-selected", item === tab ? "true" : "false");
    });
    state.sort = tab.dataset.sort;
    renderRankings();
  });
});

document.querySelector("#service-search").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderRankings();
});

document.querySelector("#region-filter").addEventListener("change", (event) => {
  state.region = event.target.value;
  renderRankings();
});

document.querySelectorAll(".budget-option").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".budget-option").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.budget = button.dataset.budget;
    renderRankings();
  });
});

document.querySelector("#reset-filters").addEventListener("click", () => {
  state.search = "";
  state.region = "global";
  state.budget = "all";
  document.querySelector("#service-search").value = "";
  document.querySelector("#region-filter").value = "global";
  document.querySelectorAll(".budget-option").forEach((item) => {
    item.classList.toggle("active", item.dataset.budget === "all");
  });
  renderRankings();
});

document.querySelector("#clear-compare").addEventListener("click", () => {
  state.selected = [];
  renderRankings();
  renderCompareDock();
});

openCompareButton.addEventListener("click", () => {
  if (state.selected.length < 2) return;
  renderCompareTable();
  refreshIcons();
  compareModal.showModal();
});

document.querySelector(".search-trigger").addEventListener("click", () => {
  document.querySelector("#service-search").focus();
  document.querySelector("#rankings").scrollIntoView({ behavior: "smooth" });
});

renderRankings();
renderCompareDock();
refreshIcons();
