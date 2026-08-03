import { motion } from "framer-motion";
import { useLanguage } from "../../context/useLanguage";
import "./ExperienceSection.css";

const experienceText = {
  en: {
    label: "Experience",
    title: "Real-world operations, analytics, and automation experience.",
    companies: [
      {
        company: "Cheil Worldwide",
        period: "2025 — Present",
        role: "Samsung Global Newsroom Operations / Social PR Data Analytics",
        summary:
          "Supported global PR platform operations for Samsung Newsroom and developed workflow automation systems to improve content verification and reporting efficiency.",
        metrics: [
          "45 Global Newsrooms",
          "1,000+ Monthly Articles",
          "GA4 Reporting",
          "Workflow Automation",
        ],
        works: [
          "Developed an internal AX/workflow automation tool for publication verification.",
          "Managed global social PR platform operations for Samsung Newsroom.",
          "Analyzed GA4-based performance data and prepared advertiser reports.",
          "Supported post-publication revision workflows and cross-agency communication.",
        ],
      },
      {
        company: "Wellysis",
        period: "2023 — 2025",
        role: "Healthcare AI Data Operations / B2B Service Support",
        summary:
          "Supported clinical AI service operations by managing ECG data quality, pilot program workflows, and operational statistics for B2B healthcare clients.",
        metrics: [
          "Clinical Data Curation",
          "ECG Data QA",
          "Pilot Operations",
          "B2B Service Support",
        ],
        works: [
          "Curated and labeled clinical ECG data for AI-based diagnostic workflows.",
          "Supported B2B healthcare service operations and pilot programs.",
          "Managed operational statistics and service usage data.",
          "Handled data validation across hospitals, company teams, and examinees.",
        ],
      },
    ],
    activitiesLabel: "Activities & Leadership",
    activities: [
      {
        org: "Dongdaemun-gu Volunteer Center · KR Buddy",
        period: "Mar 2022 — Jan 2023 · 11 months",
        role: "Foreign Exchange Student Tour Guide",
        summary:
          "Guided international exchange students through Korean cultural and historical sites as part of the KR Buddy foreign-student tour volunteer team, providing on-site cultural interpretation.",
      },
      {
        org: "Korea Social Contribution Association · Youth Champ Team (6th Cohort)",
        period: "Oct 2020 — Sep 2021 · 1 year",
        role: "Deputy Team Lead, Youth & Early Childhood Division",
        summary:
          "Planned and executed 6 social contribution campaigns. Led a crowdfunding campaign with a children's aftercare center to support young adults aging out of foster care, directing the campaign storyboard and overall funding strategy — the campaign reached 276% of its funding goal, with proceeds donated to the facility.",
      },
      {
        org: "DB Talent Development Institute",
        period: "Dec 2021 · 1 month",
        role: "Business Fundamentals Trainee",
        summary:
          "Studied entrepreneurship and management principles, including financial statement interpretation through accounting coursework. Practiced strategic decision-making through a business management simulation and presented performance analysis and problem-solving outcomes.",
      },
    ],
  },
  ko: {
    label: "경험",
    title: "실제 운영, 데이터 분석, 업무 자동화 경험을 갖추고 있습니다.",
    companies: [
      {
        company: "제일기획",
        period: "2025 — 현재",
        role: "삼성 글로벌 뉴스룸 운영 / 소셜 PR 성과 데이터 분석",
        summary:
          "삼성 글로벌 뉴스룸 운영을 지원하며, 콘텐츠 검수와 광고주 보고 효율을 높이기 위한 AX/업무 자동화 시스템을 개발했습니다.",
        metrics: [
          "45개 글로벌 뉴스룸",
          "월 1,000건+ 기사",
          "GA4 리포팅",
          "업무 자동화",
        ],
        works: [
          "기사 발행 검수용 AX/업무 자동화 내부 도구 개발",
          "삼성 뉴스룸 글로벌 소셜 PR 플랫폼 운영 지원",
          "GA4 기반 성과 데이터 집계 및 광고주 보고 리포트 작성",
          "Post Revision 및 파트너사 커뮤니케이션 프로세스 지원",
        ],
      },
      {
        company: "웰리시스",
        period: "2023 — 2025",
        role: "헬스케어 AI 데이터 운영 / B2B 서비스 운영 지원",
        summary:
          "ECG 임상 데이터 품질 관리, 시범 사업 운영 지원, B2B 서비스 운영 통계 관리를 수행하며 의료 AI 서비스 운영을 지원했습니다.",
        metrics: [
          "임상 데이터 큐레이션",
          "ECG 데이터 QA",
          "시범 사업 지원",
          "B2B 운영 지원",
        ],
        works: [
          "AI 진단 워크플로우를 위한 ECG 임상 데이터 큐레이션 및 라벨링",
          "B2B 헬스케어 서비스 운영 및 시범 사업 지원",
          "운영 통계 지표 및 서비스 이용 데이터 관리",
          "병원, 기업, 검진자 간 데이터 검증 및 운영 커뮤니케이션 지원",
        ],
      },
    ],
    activitiesLabel: "Activities & Leadership",
    activities: [
      {
        org: "동대문구 자원봉사센터 · KR BUDDY",
        period: "2022.03 — 2023.01 · 11개월",
        role: "외국인 투어 봉사단원",
        summary:
          "동대문구 자원봉사단체 소속 외국인 투어 봉사단 'KR BUDDY'의 일원으로서 외국인 교환학생들을 대상으로 한국 문화 관광 안내 및 해설 봉사를 진행했습니다.",
      },
      {
        org: "한국사회공헌협회 청년챔프단 6기",
        period: "2020.10 — 2021.09 · 1년",
        role: "청소년/영유아 분과 부팀장",
        summary:
          "청소년/영유아 분과 소속팀의 부팀장을 맡아 6개의 사회공헌 캠페인을 기획·실행했습니다. 대표적으로 보호종료아동의 자립 환경 조성을 위해 아동센터와 협력한 '어깨동무 한걸음' 크라우드펀딩을 기획했으며, 스토리보드 제작과 전반적인 캠페인 운영을 총괄해 펀딩 목표 금액의 276%를 달성하고 수익금을 보호종료시설에 기부했습니다.",
      },
      {
        org: "DB인재개발원",
        period: "2021.12 · 1개월",
        role: "기업가정신 · 경영 기초 교육생",
        summary:
          "기업가 정신과 경영 원칙을 배우고, 회계 강의를 통해 재무제표 해석과 사업 운영의 기초를 익혔습니다. 이후 경영 시뮬레이션을 통해 전략을 수립하고 기업 운영을 실습했으며, 성과 분석 및 발표를 통해 문제 해결 역량을 길렀습니다.",
      },
    ],
  },
};

function ExperienceSection() {
  const { language } = useLanguage();
  const text = experienceText[language];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-head">
        <p className="experience-label">{text.label}</p>
        <h2>{text.title}</h2>
      </div>

      <div className="experience-list">
        {text.companies.map((item, index) => (
          <motion.article
            className="experience-card"
            key={item.company}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <div className="experience-card-top">
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <span>{item.period}</span>
            </div>

            <p className="experience-summary">{item.summary}</p>

            <div className="experience-metrics">
              {item.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>

            <ul className="experience-works">
              {item.works.map((work) => (
                <li key={work}>{work}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      {/* =========================================================
         ACTIVITIES & LEADERSHIP
      ========================================================= */}

      <div className="activities-block">
        <div className="activities-heading">
          <span className="activities-icon">✦</span>
          <h3>{text.activitiesLabel}</h3>
        </div>

        <div className="activities-list">
          {text.activities.map((item, index) => (
            <motion.article
              className="activity-card"
              key={item.org}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="activity-card-top">
                <div>
                  <h4>{item.org}</h4>
                  <p>{item.role}</p>
                </div>
                <span>{item.period}</span>
              </div>

              <p className="activity-summary">{item.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
