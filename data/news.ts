export type NewsItem = {
  slug: string
  title: string
  summary: string
  content: string
  tdat: string
  date: string // ISO or simple string
}

export const newsData: NewsItem[] = [
  {
    slug: "letter-from-pakistan-pm",
    title: "Letter from the Prime Minister of Pakistan Wishing Begum Khaleda Zia for Swift Recovery",
    summary:
      "Prime Minister of Pakistan Muhammad Shehbaz Sharif has sent a letter expressing his prayers and good wishes for the former Prime Minister's health.",
    content:
    "Prime Minister of Pakistan, Muhammad Shehbaz Sharif, has sent a heartfelt letter to Begum Khaleda Zia,\
           the former Prime Minister of Bangladesh, expressing his sincere prayers and well wishes for her swift recovery. \
           The letter conveyed the Prime Minister's concern for her health, stating that he is hopeful for her recovery and \
           that the people of Pakistan are standing in solidarity with the people of Bangladesh during this challenging \
           time. He expressed Pakistan's readiness to provide any necessary medical support and assured cooperation \
           in healthcare, if needed.\
           The letter further mentioned the long-standing relations between Pakistan and Bangladesh and emphasized\
           the importance of maintaining bilateral ties. He highlighted the shared history, the values of democracy, \
           and the commitment to peace and prosperity in the region. Full details of the message and statements from \
           both leaders will be shared in this article.",
      
    tdat: "Date",
    date: "2025-11-10"
  },
  {
    slug: "long-term-decisions-country",
    title:
      "Long-term Decisions of the Country Must Be Made by an Elected Government: Tarique Rahman",
    summary:
      "BNP's Acting Chairman Tarique Rahman has said that the long-term decisions of the country should be made by a democratically elected government.",
    content:
          "In a recent statement, Tarique Rahman, the Acting Chairman of Bangladesh Nationalist Party (BNP), \
          emphasized the importance of democratic processes in making long-term national decisions. He stated \
          that a democratically elected government, which reflects the will of the people, should have the mandate \
          to make crucial decisions that affect the future of the country.\
          Rahman also pointed out the ongoing political challenges in Bangladesh and stressed the need for inclusive\
           dialogue, consultation with opposition parties, and reforms to ensure fair elections. According to him, \
           without a stable and democratically elected government, long-term policy decisions, especially those relating \
           to national security, economic growth, and foreign relations, would be compromised. Rahman also reiterated the \
           importance of international cooperation and shared responsibility in solving global challenges such as climate change and trade imbalances.\
          He called for unity among the political leaders to address these issues for the greater good of Bangladesh and\
            its people. The full speech and detailed analysis of his statements on governance, democracy, and the economy are available below.",
    tdat:"Date",
    date: "2025-11-09"
  },
  {
    slug: "heart-lungs-affected-khaleda",
    title: "Heart and Lungs Affected, Begum Khaleda Zia Under Intensive Observation",
    summary:
      "Former Prime Minister and BNP Chairperson Begum Khaleda Zia is suffering from a chest infection, and both her heart and lungs are being observed closely by the medical team.",
    content:
        "Begum Khaleda Zia, the former Prime Minister of Bangladesh and Chairperson of BNP, is currently undergoing intensive medical \
        observation due to complications from a chest infection that has affected both her heart and lungs. According to medical officials, \
        she was admitted to the hospital after experiencing difficulty in breathing and chest pain.\
        The medical team has confirmed that her heart and lungs are being carefully monitored. In response to her condition, \
        doctors have outlined a detailed treatment plan, which includes antibiotics to address the chest infection and medications to \
        support her respiratory and cardiac functions. Medical experts have advised that she remains under close observation for the next \
        several days to ensure her health stabilizes.\
        The former Prime Minister’s family, along with her political party, BNP, has urged the nation to keep her in their thoughts \
        and prayers. Full updates on her condition and official statements from her doctors will follow.",

    tdat:"Date",
    date: "2025-11-08"
  },
  {
    slug: "bnp-delegation-bhutan",
    title: "BNP Delegation Meets Prime Minister of Bhutan",
    summary:
      "A delegation of the Bangladesh Nationalist Party - BNP held a meeting with the visiting Prime Minister of Bhutan to discuss bilateral cooperation and mutual interests.",
    content:
        "A high-level delegation from the Bangladesh Nationalist Party (BNP), led by party officials, met with the visiting Prime \
        Minister of Bhutan to discuss areas of mutual interest and cooperation. The meeting, which took place in Bhutan's capital, \
        Thimphu, focused on strengthening bilateral ties between the two nations in areas such as trade, education, and infrastructure.\
        During the talks, the Prime Minister of Bhutan emphasized the importance of regional cooperation, particularly in South Asia, \
        and suggested initiatives to enhance cultural exchanges, tourism, and economic partnerships between the two countries. BNP \
        officials expressed their eagerness to support Bhutan’s development efforts, particularly in promoting sustainable agriculture \
        and renewable energy sources. \
        The two leaders also discussed the potential for deeper collaboration in international forums, addressing global issues like \
        climate change and economic inequalities. The full details of the meeting and future cooperation agreements will be available shortly.",
    tdat:"Date",
    date: "2025-11-07"
  },

  // extra items for the listing page
  {
    slug: "community-health-drive",
    title: "Community Health Drive Launched",
    summary: "A community health drive was launched this week providing free checkups and medicines.",
    content: "A community health drive was launched this week in several local neighborhoods, providing free medical checkups, \
        medicines, and basic healthcare services to residents. Local volunteers, alongside health professionals, set up temporary \
        clinics in community centers, where residents were able to receive free consultations, health screenings, and essential medications.\
        The initiative was organized by a coalition of healthcare organizations, local governments, and non-profit groups. The primary \
        objective is to increase access to basic care, raise awareness about preventative health practices, and promote early detection \
        of common diseases. The drive is expected to continue for the next few weeks, with more areas scheduled for coverage. \
        Doctors and healthcare professionals involved in the drive have emphasized the importance of regular health checkups and \
        disease prevention measures, especially in underserved communities. The organizers are hopeful that this initiative will have \
        a lasting positive impact on public health in the region. More updates and future plans for similar health initiatives will be \
        shared here.",
    tdat: "Date",
    date: "2025-11-05"
  }
]