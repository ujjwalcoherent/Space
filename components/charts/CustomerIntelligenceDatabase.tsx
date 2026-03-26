'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  sNo: number
  // Customer Information
  customerName: string
  businessOverview: string
  industryVertical: string
  totalAnnualRevenue: string
  customerSizeScale: string
  // Contact Details
  keyContactPerson: string
  designationRole: string
  emailAddress: string
  phoneWhatsApp: string
  linkedInProfile: string
  websiteUrl: string
  // Professional Drivers (Prop 2+)
  keyBuyingCriteria: string
  keyPainPoints: string
  upcomingTriggers: string
  // Purchasing Behaviour Metrics (Prop 3)
  budgetOwnership: string
  procurementModel: string
  preferredEngagementType: string
  // Solution Requirements (Prop 3)
  preferredSolutionType: string
  preferredDeploymentModel: string
  performanceExpectations: string
  // CMI Insights (Prop 3)
  customerBenchmarkingSummary: string
  additionalComments: string
}

const sampleCustomerData: CustomerData[] = [
  {
    sNo: 1,
    customerName: 'SES S.A.',
    businessOverview: 'Commercial satellite operator with MEO and GEO fleet',
    industryVertical: 'Space & Satellite Communications',
    totalAnnualRevenue: '2,080',
    customerSizeScale: 'Large enterprise (global satellite fleet, multi-site ground network)',
    keyContactPerson: 'Marc Frankel',
    designationRole: 'VP Ground Segment Engineering',
    emailAddress: 'm.frankel@ses.com',
    phoneWhatsApp: '+352 710 725 1',
    linkedInProfile: 'linkedin.com/in/marcfrankel',
    websiteUrl: 'www.ses.com',
    keyBuyingCriteria: 'High antenna performance, multi-band frequency support, MEO tracking accuracy',
    keyPainPoints: 'Aging ground infrastructure for O3b mPOWER constellation, high capex for multi-orbit upgrades',
    upcomingTriggers: 'O3b mPOWER constellation expansion, next-gen MEO ground network rollout',
    budgetOwnership: 'VP Ground Segment Engineering / CTO Office',
    procurementModel: 'Direct procurement from OEMs with EPC integration',
    preferredEngagementType: 'Full ground station deployment at new sites',
    preferredSolutionType: 'Antenna systems, RF uplink/downlink, baseband processing',
    preferredDeploymentModel: 'On-premise ground infrastructure with cloud-based orchestration',
    performanceExpectations: 'Near-zero mission downtime, 99.99% link availability',
    customerBenchmarkingSummary: 'Tier-1 operator, high-value strategic account with multi-year capex plans',
    additionalComments: 'Strong candidate for MEO tracking antenna and baseband upgrades',
  },
  {
    sNo: 2,
    customerName: 'Intelsat',
    businessOverview: 'Global communications satellite operator',
    industryVertical: 'Space & Satellite Communications',
    totalAnnualRevenue: '1,800',
    customerSizeScale: 'Large enterprise (50+ GEO satellites, global ground network)',
    keyContactPerson: 'Sarah Chen',
    designationRole: 'Director of Ground Systems',
    emailAddress: 's.chen@intelsat.com',
    phoneWhatsApp: '+1 703 559 6800',
    linkedInProfile: 'linkedin.com/in/sarahchen-intelsat',
    websiteUrl: 'www.intelsat.com',
    keyBuyingCriteria: 'Scalable multi-band antennas, software-defined ground architecture',
    keyPainPoints: 'Legacy ground stations require modernization for 5G backhaul services',
    upcomingTriggers: 'Software-defined networking transition, unified GEO-LEO network plans',
    budgetOwnership: 'CTO / SVP Network Operations',
    procurementModel: 'Direct procurement from OEMs',
    preferredEngagementType: 'Phased modernization of existing ground stations',
    preferredSolutionType: 'RF equipment, monitoring & control systems, TT&C systems',
    preferredDeploymentModel: 'Hybrid ground + cloud-based processing',
    performanceExpectations: 'High link availability, seamless GEO-LEO handover',
    customerBenchmarkingSummary: 'Tier-1 strategic account, major ground network modernization planned',
    additionalComments: 'Priority for software-defined ground segment solutions',
  },
  {
    sNo: 3,
    customerName: 'Northrop Grumman',
    businessOverview: 'Defense contractor with space and ground systems division',
    industryVertical: 'Defense & Homeland Security',
    totalAnnualRevenue: '36,600',
    customerSizeScale: 'Large enterprise (prime contractor for military satellite ground systems)',
    keyContactPerson: 'James Morrison',
    designationRole: 'VP Space Ground Systems',
    emailAddress: 'j.morrison@ngc.com',
    phoneWhatsApp: '+1 310 812 4321',
    linkedInProfile: 'linkedin.com/in/jamesmorrison-ngc',
    websiteUrl: 'www.northropgrumman.com',
    keyBuyingCriteria: 'MIL-SPEC compliance, anti-jam capability, SIGINT integration',
    keyPainPoints: 'Interoperability across multi-domain ground architectures',
    upcomingTriggers: 'JADC2 program integration, next-gen OPIR ground system',
    budgetOwnership: 'VP Space Ground Systems / Program Manager',
    procurementModel: 'Prime contractor-led procurement with subcontractor components',
    preferredEngagementType: 'Long-term program integration and co-development',
    preferredSolutionType: 'TT&C systems, X-Band RF equipment, encrypted baseband processing',
    preferredDeploymentModel: 'Hardened on-premise military ground infrastructure',
    performanceExpectations: 'Zero mission downtime, anti-jam and anti-spoof resilience',
    customerBenchmarkingSummary: 'Tier-1 defense prime, gateway to US DoD ground system programs',
    additionalComments: 'Engage through classified program channels for OPIR and JADC2',
  },
  {
    sNo: 4,
    customerName: 'Planet Labs',
    businessOverview: 'Earth observation satellite operator with large LEO constellation',
    industryVertical: 'Earth Observation & Remote Sensing',
    totalAnnualRevenue: '220',
    customerSizeScale: 'Mid-size enterprise (200+ LEO satellites, growing ground network)',
    keyContactPerson: 'Laura Kim',
    designationRole: 'Head of Ground Infrastructure',
    emailAddress: 'l.kim@planet.com',
    phoneWhatsApp: '+1 415 829 3313',
    linkedInProfile: 'linkedin.com/in/laurakim-planet',
    websiteUrl: 'www.planet.com',
    keyBuyingCriteria: 'High-throughput downlink, rapid tasking uplink, automated scheduling',
    keyPainPoints: 'Ground station capacity bottleneck for growing constellation data volume',
    upcomingTriggers: 'Pelican constellation launch, new ground station sites in Arctic and Southern Hemisphere',
    budgetOwnership: 'Head of Ground Infrastructure / CTO',
    procurementModel: 'Direct procurement from specialized ground station OEMs',
    preferredEngagementType: 'Turnkey ground station deployment at new sites',
    preferredSolutionType: 'S-Band/X-Band antennas, high-speed baseband demodulators',
    preferredDeploymentModel: 'On-premise with cloud data pipeline integration',
    performanceExpectations: 'Maximum data downlink per pass, <5 min latency to cloud',
    customerBenchmarkingSummary: 'High-growth EO operator, expanding ground footprint rapidly',
    additionalComments: 'Strong fit for automated multi-antenna ground station solutions',
  },
  {
    sNo: 5,
    customerName: 'ISRO (Indian Space Research Organisation)',
    businessOverview: 'Government space agency operating multi-mission satellite fleet',
    industryVertical: 'Government Space Agency',
    totalAnnualRevenue: '1,900',
    customerSizeScale: 'Large enterprise (national space agency, 50+ active satellites)',
    keyContactPerson: 'Dr. Rajesh Nair',
    designationRole: 'Director, ISTRAC',
    emailAddress: 'r.nair@isro.gov.in',
    phoneWhatsApp: '+91 80 2508 4000',
    linkedInProfile: 'linkedin.com/in/rajesh-nair-isro',
    websiteUrl: 'www.isro.gov.in',
    keyBuyingCriteria: 'Multi-mission TT&C, deep space tracking, indigenous technology preference',
    keyPainPoints: 'Scaling ground network for Gaganyaan and interplanetary missions',
    upcomingTriggers: 'Gaganyaan human spaceflight, Chandrayaan-4, NISAR mission support',
    budgetOwnership: 'Director ISTRAC / Chairman ISRO',
    procurementModel: 'Government tender process with technology transfer requirements',
    preferredEngagementType: 'Technology partnership with knowledge transfer',
    preferredSolutionType: 'Deep space antennas, S-Band TT&C, mission control systems',
    preferredDeploymentModel: 'On-premise government-owned ground infrastructure',
    performanceExpectations: 'Deep space tracking capability, multi-mission concurrent support',
    customerBenchmarkingSummary: 'Major government account, increasing budget with ambitious mission pipeline',
    additionalComments: 'Requires compliance with Indian procurement and offset regulations',
  },
  {
    sNo: 6,
    customerName: 'SpaceX',
    businessOverview: 'Launch provider and Starlink LEO broadband constellation operator',
    industryVertical: 'Space & Satellite Communications',
    totalAnnualRevenue: '8,700',
    customerSizeScale: 'Large enterprise (5,000+ LEO satellites, global ground network)',
    keyContactPerson: 'David Park',
    designationRole: 'Senior Director, Starlink Ground Systems',
    emailAddress: 'd.park@spacex.com',
    phoneWhatsApp: '+1 310 363 6000',
    linkedInProfile: 'linkedin.com/in/davidpark-spacex',
    websiteUrl: 'www.spacex.com',
    keyBuyingCriteria: 'Ultra-high throughput, phased array technology, rapid deployment',
    keyPainPoints: 'Massive ground station scaling for global Starlink coverage',
    upcomingTriggers: 'Starlink V2 constellation densification, direct-to-cell gateway expansion',
    budgetOwnership: 'Senior Director Ground Systems / VP Engineering',
    procurementModel: 'Primarily in-house with selective OEM partnerships',
    preferredEngagementType: 'Component-level supply for in-house integration',
    preferredSolutionType: 'High-throughput gateway antennas, Ka-Band RF chains',
    preferredDeploymentModel: 'On-premise modular gateway stations',
    performanceExpectations: 'Tbps-class gateway throughput, 99.99% uptime',
    customerBenchmarkingSummary: 'Largest LEO operator, selective but high-volume procurement potential',
    additionalComments: 'Primarily builds in-house; target component and subsystem opportunities',
  },
  {
    sNo: 7,
    customerName: 'Airbus Defence and Space',
    businessOverview: 'European aerospace and defense group with satellite manufacturing and operations',
    industryVertical: 'Aerospace & Defense',
    totalAnnualRevenue: '11,200',
    customerSizeScale: 'Large enterprise (satellite manufacturer and ground system integrator)',
    keyContactPerson: 'Sophie Laurent',
    designationRole: 'Head of Ground Segment Solutions',
    emailAddress: 's.laurent@airbus.com',
    phoneWhatsApp: '+33 5 62 19 50 00',
    linkedInProfile: 'linkedin.com/in/sophielaurant-airbus',
    websiteUrl: 'www.airbus.com/space',
    keyBuyingCriteria: 'Interoperability with ESA standards, multi-mission flexibility',
    keyPainPoints: 'Integration complexity across European multi-national programs',
    upcomingTriggers: 'ESA Copernicus expansion, OneSat flexible satellite ground support',
    budgetOwnership: 'Head of Ground Segment / Program Directors',
    procurementModel: 'EPC prime contractor-led with European supplier preference',
    preferredEngagementType: 'Program-level ground segment subcontract partnerships',
    preferredSolutionType: 'Monitoring & control systems, baseband equipment, test & measurement',
    preferredDeploymentModel: 'On-premise with ESA-compliant ground segment architecture',
    performanceExpectations: 'ESA ECSS standards compliance, multi-mission concurrent operations',
    customerBenchmarkingSummary: 'Tier-1 European integrator, gateway to ESA and EU space programs',
    additionalComments: 'Engage via European space program procurement channels',
  },
  {
    sNo: 8,
    customerName: 'Amazon (Project Kuiper)',
    businessOverview: 'LEO broadband constellation under development',
    industryVertical: 'Space & Satellite Communications',
    totalAnnualRevenue: '574,000',
    customerSizeScale: 'Large enterprise (3,200+ satellite constellation planned)',
    keyContactPerson: 'Michael Torres',
    designationRole: 'Director Ground Network Engineering',
    emailAddress: 'm.torres@amazon.com',
    phoneWhatsApp: '+1 206 266 1000',
    linkedInProfile: 'linkedin.com/in/michaeltorres-kuiper',
    websiteUrl: 'www.aboutamazon.com/projectkuiper',
    keyBuyingCriteria: 'Rapid deployment, cost efficiency at scale, Ka-Band expertise',
    keyPainPoints: 'Building ground network from scratch under aggressive timeline',
    upcomingTriggers: 'First operational satellite launches, gateway station buildout 2025-2027',
    budgetOwnership: 'Director Ground Network / VP Project Kuiper',
    procurementModel: 'Direct OEM procurement with competitive bidding',
    preferredEngagementType: 'Turnkey gateway station deployment at multiple sites',
    preferredSolutionType: 'Ka-Band gateway antennas, high-throughput baseband, network management',
    preferredDeploymentModel: 'On-premise with AWS cloud backend integration',
    performanceExpectations: 'Carrier-grade availability, Tbps aggregate throughput',
    customerBenchmarkingSummary: 'Greenfield mega-constellation, massive ground station procurement opportunity',
    additionalComments: 'Time-sensitive opportunity; ground network buildout in active procurement phase',
  },
  {
    sNo: 9,
    customerName: 'Eutelsat Group',
    businessOverview: 'Combined GEO and LEO satellite operator (post OneWeb merger)',
    industryVertical: 'Space & Satellite Communications',
    totalAnnualRevenue: '1,400',
    customerSizeScale: 'Large enterprise (GEO fleet + OneWeb LEO constellation)',
    keyContactPerson: 'Elena Rossi',
    designationRole: 'CTO',
    emailAddress: 'e.rossi@eutelsat.com',
    phoneWhatsApp: '+33 1 53 98 47 47',
    linkedInProfile: 'linkedin.com/in/elenarossi-eutelsat',
    websiteUrl: 'www.eutelsat.com',
    keyBuyingCriteria: 'Multi-orbit ground architecture, GEO-LEO convergence capability',
    keyPainPoints: 'Integrating OneWeb LEO ground with legacy GEO infrastructure',
    upcomingTriggers: 'Unified GEO-LEO service platform, OneWeb Gen 2 constellation',
    budgetOwnership: 'CTO / VP Network Architecture',
    procurementModel: 'Direct OEM with system integrator partnerships',
    preferredEngagementType: 'Phased ground network convergence project',
    preferredSolutionType: 'Multi-orbit antennas, Ku/Ka-Band RF chains, unified monitoring systems',
    preferredDeploymentModel: 'Hybrid ground infrastructure across existing and new sites',
    performanceExpectations: 'Seamless GEO-LEO handover, unified network management',
    customerBenchmarkingSummary: 'Strategic account with unique multi-orbit integration requirement',
    additionalComments: 'Priority engagement for GEO-LEO convergent ground solutions',
  },
  {
    sNo: 10,
    customerName: 'Lockheed Martin',
    businessOverview: 'Defense and space prime contractor with satellite and ground system programs',
    industryVertical: 'Defense & Homeland Security',
    totalAnnualRevenue: '65,900',
    customerSizeScale: 'Large enterprise (prime contractor for GPS, SBIRS, and classified programs)',
    keyContactPerson: 'Robert Williams',
    designationRole: 'VP Ground Systems, Space Division',
    emailAddress: 'r.williams@lmco.com',
    phoneWhatsApp: '+1 301 897 6000',
    linkedInProfile: 'linkedin.com/in/robertwilliams-lmco',
    websiteUrl: 'www.lockheedmartin.com',
    keyBuyingCriteria: 'MIL-SPEC hardened systems, cyber-resilient architecture, COMSEC',
    keyPainPoints: 'Modernizing legacy military ground control for next-gen constellations',
    upcomingTriggers: 'GPS IIIF ground segment, Next-Gen OPIR, SDA Proliferated Warfighter Space Architecture',
    budgetOwnership: 'VP Ground Systems / DoD Program Managers',
    procurementModel: 'Prime contractor procurement with approved vendor list',
    preferredEngagementType: 'Long-term subcontract for ground system subsystems',
    preferredSolutionType: 'Encrypted TT&C, anti-jam antennas, hardened baseband processing',
    preferredDeploymentModel: 'Hardened on-premise military facilities (SCIF-compatible)',
    performanceExpectations: 'Zero-downtime mission operations, TEMPEST compliance',
    customerBenchmarkingSummary: 'Tier-1 defense prime, largest US military space ground system integrator',
    additionalComments: 'Requires security clearance for engagement; target unclassified subsystem opportunities first',
  },
  {
    sNo: 11,
    customerName: 'Telesat',
    businessOverview: 'Canadian satellite operator developing Lightspeed LEO constellation',
    industryVertical: 'Space & Satellite Communications',
    totalAnnualRevenue: '580',
    customerSizeScale: 'Mid-size enterprise (GEO fleet + Lightspeed LEO constellation in development)',
    keyContactPerson: 'Patrick Leblanc',
    designationRole: 'Director Ground Network',
    emailAddress: 'p.leblanc@telesat.com',
    phoneWhatsApp: '+1 613 748 0123',
    linkedInProfile: 'linkedin.com/in/patrickleblanc-telesat',
    websiteUrl: 'www.telesat.com',
    keyBuyingCriteria: 'Ka-Band gateway performance, network automation, cost efficiency',
    keyPainPoints: 'Building new Lightspeed ground network within budget constraints',
    upcomingTriggers: 'Lightspeed constellation first launches, gateway station procurement',
    budgetOwnership: 'Director Ground Network / VP Engineering',
    procurementModel: 'Competitive bidding with preferred vendor shortlist',
    preferredEngagementType: 'Turnkey gateway station deployment',
    preferredSolutionType: 'Ka-Band gateway antennas, optical ground terminals, baseband routers',
    preferredDeploymentModel: 'On-premise modular ground stations',
    performanceExpectations: 'Low-latency enterprise-grade service, high gateway throughput',
    customerBenchmarkingSummary: 'Greenfield LEO opportunity, active procurement for Lightspeed ground segment',
    additionalComments: 'Time-sensitive; Lightspeed ground network RFPs expected soon',
  },
  {
    sNo: 12,
    customerName: 'Japan Aerospace Exploration Agency (JAXA)',
    businessOverview: 'Japanese national space agency with diverse satellite missions',
    industryVertical: 'Government Space Agency',
    totalAnnualRevenue: '1,500',
    customerSizeScale: 'Large enterprise (national space agency, 20+ active satellites)',
    keyContactPerson: 'Dr. Takeshi Yamamoto',
    designationRole: 'Director, Tracking and Data Acquisition',
    emailAddress: 't.yamamoto@jaxa.jp',
    phoneWhatsApp: '+81 50 3362 2631',
    linkedInProfile: 'linkedin.com/in/takeshi-yamamoto-jaxa',
    websiteUrl: 'www.jaxa.jp',
    keyBuyingCriteria: 'Deep space tracking, high-gain antenna systems, CCSDS compatibility',
    keyPainPoints: 'Upgrading ground stations for lunar and Mars mission support',
    upcomingTriggers: 'MMX (Mars Moon eXploration), Lunar Gateway support, HTV-X missions',
    budgetOwnership: 'Director TDA / JAXA Executive Director',
    procurementModel: 'Government tender with Japanese industry preference',
    preferredEngagementType: 'Technology collaboration with joint development',
    preferredSolutionType: 'Deep space antennas (34m+), S/X/Ka-Band TT&C systems',
    preferredDeploymentModel: 'On-premise at Usuda, Sagamihara, and overseas partner sites',
    performanceExpectations: 'Deep space tracking to Mars distance, high-precision orbit determination',
    customerBenchmarkingSummary: 'Key Asia-Pacific government account with growing deep space ambitions',
    additionalComments: 'Partner with Japanese integrators (NEC, Mitsubishi Electric) for access',
  },
  {
    sNo: 13,
    customerName: 'Maxar Technologies',
    businessOverview: 'Earth observation and geospatial intelligence satellite operator',
    industryVertical: 'Earth Observation & Remote Sensing',
    totalAnnualRevenue: '1,800',
    customerSizeScale: 'Large enterprise (WorldView constellation, global ground network)',
    keyContactPerson: 'Amanda Foster',
    designationRole: 'VP Ground Operations',
    emailAddress: 'a.foster@maxar.com',
    phoneWhatsApp: '+1 303 684 4000',
    linkedInProfile: 'linkedin.com/in/amandafoster-maxar',
    websiteUrl: 'www.maxar.com',
    keyBuyingCriteria: 'High-bandwidth X-Band downlink, rapid image tasking, ground automation',
    keyPainPoints: 'Increasing data volume from next-gen high-resolution imaging satellites',
    upcomingTriggers: 'WorldView Legion constellation, enhanced ground data processing',
    budgetOwnership: 'VP Ground Operations / CTO',
    procurementModel: 'Direct procurement from specialized OEMs',
    preferredEngagementType: 'Ground station capacity expansion at existing sites',
    preferredSolutionType: 'X-Band antennas, high-speed demodulators, data recording systems',
    preferredDeploymentModel: 'On-premise with direct fiber to cloud processing',
    performanceExpectations: 'Maximum bits per pass, sub-hour image delivery to customers',
    customerBenchmarkingSummary: 'Leading EO operator with expanding ground segment needs',
    additionalComments: 'Strong fit for high-throughput X-Band ground solutions',
  },
  {
    sNo: 14,
    customerName: 'Thales Alenia Space',
    businessOverview: 'European satellite manufacturer and ground system provider',
    industryVertical: 'Aerospace & Defense',
    totalAnnualRevenue: '2,600',
    customerSizeScale: 'Large enterprise (satellite OEM, ground system integrator for Galileo/Copernicus)',
    keyContactPerson: 'Jean-Pierre Dupont',
    designationRole: 'Director Ground Segment Programs',
    emailAddress: 'jp.dupont@thalesaleniaspace.com',
    phoneWhatsApp: '+33 4 92 92 70 00',
    linkedInProfile: 'linkedin.com/in/jeanpierredupont-tas',
    websiteUrl: 'www.thalesaleniaspace.com',
    keyBuyingCriteria: 'ESA/ECSS compliance, navigation signal quality, multi-constellation support',
    keyPainPoints: 'Complex integration of multi-national European space programs',
    upcomingTriggers: 'Galileo Second Generation, Copernicus Next Gen, IRIS2 secure connectivity',
    budgetOwnership: 'Director Ground Segment / ESA Program Managers',
    procurementModel: 'ESA/EU procurement framework with geographic return obligations',
    preferredEngagementType: 'Subcontract partnership for ground segment subsystems',
    preferredSolutionType: 'Navigation receivers, monitoring stations, L-Band/S-Band equipment',
    preferredDeploymentModel: 'Distributed European ground network per ESA specifications',
    performanceExpectations: 'Navigation signal accuracy, ECSS reliability standards',
    customerBenchmarkingSummary: 'Key European integrator, gateway to EU institutional space programs',
    additionalComments: 'European content requirements apply; partner with EU-based entities',
  },
  {
    sNo: 15,
    customerName: 'Viasat Inc.',
    businessOverview: 'Broadband satellite operator with GEO and upcoming LEO capabilities',
    industryVertical: 'Space & Satellite Communications',
    totalAnnualRevenue: '3,500',
    customerSizeScale: 'Large enterprise (ViaSat-3 constellation, global gateway network)',
    keyContactPerson: 'Kevin Zhang',
    designationRole: 'SVP Ground Network Engineering',
    emailAddress: 'k.zhang@viasat.com',
    phoneWhatsApp: '+1 760 476 2200',
    linkedInProfile: 'linkedin.com/in/kevinzhang-viasat',
    websiteUrl: 'www.viasat.com',
    keyBuyingCriteria: 'Ultra-high throughput Ka-Band gateways, network scalability',
    keyPainPoints: 'Scaling gateway infrastructure for ViaSat-3 terabit-class capacity',
    upcomingTriggers: 'ViaSat-3 Americas/EMEA/APAC gateway buildout, Inmarsat integration',
    budgetOwnership: 'SVP Ground Network / CTO',
    procurementModel: 'Direct OEM with long-term supply agreements',
    preferredEngagementType: 'Multi-site gateway station deployment program',
    preferredSolutionType: 'Ka-Band gateway antennas, high-power amplifiers, baseband gateways',
    preferredDeploymentModel: 'On-premise high-capacity gateway stations worldwide',
    performanceExpectations: 'Terabit-class aggregate gateway throughput, carrier-grade availability',
    customerBenchmarkingSummary: 'Major broadband operator, large-scale gateway procurement in progress',
    additionalComments: 'Active RFPs for ViaSat-3 gateway equipment; time-sensitive engagement',
  },
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  const thCustomerInfo = "bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black"
  const thContact = "bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black"
  const thDrivers = "bg-[#C8E6C9] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black"
  const thPurchasing = "bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black"
  const thSolution = "bg-[#DEB887] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black"
  const thCMI = "bg-[#FFD700] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black"
  const td = "border border-gray-300 px-3 py-2 text-sm text-black"

  // Proposition 1 - Basic: Customer Information + Contact Details
  const renderProposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className={`${thCustomerInfo} min-w-[60px]`}>S.No.</th>
            <th className={`${thCustomerInfo} min-w-[180px]`}>Customer Name / Company Name</th>
            <th className={`${thCustomerInfo} min-w-[220px]`}>
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Commercial satellite operator / Government space agency / Defense contractor, etc.)</div>
            </th>
            <th className={`${thCustomerInfo} min-w-[200px]`}>
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(Space & Satellite Communications / Defense & Homeland Security, etc.)</div>
            </th>
            <th className={`${thCustomerInfo} min-w-[150px]`}>Total Annual Revenue (US$ Million)</th>
            <th className={`${thCustomerInfo} min-w-[200px]`}>
              <div>Customer Size / Scale</div>
              <div className="font-normal text-[10px] text-gray-600">(Large enterprise (global satellite fleet / multi-site ground network), etc.)</div>
            </th>
            <th className={`${thContact} min-w-[130px]`}>Key Contact Person</th>
            <th className={`${thContact} min-w-[130px]`}>Designation/Role</th>
            <th className={`${thContact} min-w-[150px]`}>Email Address</th>
            <th className={`${thContact} min-w-[140px]`}>Phone/WhatsApp Number</th>
            <th className={`${thContact} min-w-[150px]`}>LinkedIn Profile</th>
            <th className={`${thContact} min-w-[130px]`}>Website URL</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((c, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className={`${td} text-center`}>{c.sNo}</td>
              <td className={td}>{c.customerName}</td>
              <td className={td}>{c.businessOverview}</td>
              <td className={td}>{c.industryVertical}</td>
              <td className={td}>{c.totalAnnualRevenue}</td>
              <td className={td}>{c.customerSizeScale}</td>
              <td className={td}>{c.keyContactPerson}</td>
              <td className={td}>{c.designationRole}</td>
              <td className={td}>{c.emailAddress}</td>
              <td className={td}>{c.phoneWhatsApp}</td>
              <td className={td}>{c.linkedInProfile}</td>
              <td className={td}>{c.websiteUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 2 - Advanced: Basic + Professional Drivers
  const renderProposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#A5D6A7] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Professional Drivers
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className={`${thCustomerInfo} min-w-[60px]`}>S.No.</th>
            <th className={`${thCustomerInfo} min-w-[180px]`}>Customer Name / Company Name</th>
            <th className={`${thCustomerInfo} min-w-[220px]`}>
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Commercial satellite operator / Government space agency / Defense contractor, etc.)</div>
            </th>
            <th className={`${thCustomerInfo} min-w-[200px]`}>
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(Space & Satellite Communications / Defense & Homeland Security, etc.)</div>
            </th>
            <th className={`${thCustomerInfo} min-w-[150px]`}>Total Annual Revenue (US$ Million)</th>
            <th className={`${thCustomerInfo} min-w-[200px]`}>
              <div>Customer Size / Scale</div>
              <div className="font-normal text-[10px] text-gray-600">(Large enterprise (global satellite fleet / multi-site ground network), etc.)</div>
            </th>
            <th className={`${thContact} min-w-[130px]`}>Key Contact Person</th>
            <th className={`${thContact} min-w-[130px]`}>Designation/Role</th>
            <th className={`${thContact} min-w-[150px]`}>Email Address</th>
            <th className={`${thContact} min-w-[140px]`}>Phone/WhatsApp Number</th>
            <th className={`${thContact} min-w-[150px]`}>LinkedIn Profile</th>
            <th className={`${thContact} min-w-[130px]`}>Website URL</th>
            <th className={`${thDrivers} min-w-[220px]`}>
              <div>Key Buying Criteria</div>
              <div className="font-normal text-[10px] text-gray-600">(High antenna performance and tracking accuracy / Multi-band frequency support, etc.)</div>
            </th>
            <th className={`${thDrivers} min-w-[220px]`}>
              <div>Key Pain Points</div>
              <div className="font-normal text-[10px] text-gray-600">(Limited ground coverage for growing constellations / High capex for upgrades, etc.)</div>
            </th>
            <th className={`${thDrivers} min-w-[220px]`}>
              <div>Upcoming Triggers and Initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">(LEO constellation expansion / Earth observation program launch, etc.)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((c, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className={`${td} text-center`}>{c.sNo}</td>
              <td className={td}>{c.customerName}</td>
              <td className={td}>{c.businessOverview}</td>
              <td className={td}>{c.industryVertical}</td>
              <td className={td}>{c.totalAnnualRevenue}</td>
              <td className={td}>{c.customerSizeScale}</td>
              <td className={td}>{c.keyContactPerson}</td>
              <td className={td}>{c.designationRole}</td>
              <td className={td}>{c.emailAddress}</td>
              <td className={td}>{c.phoneWhatsApp}</td>
              <td className={td}>{c.linkedInProfile}</td>
              <td className={td}>{c.websiteUrl}</td>
              <td className={td}>{c.keyBuyingCriteria}</td>
              <td className={td}>{c.keyPainPoints}</td>
              <td className={td}>{c.upcomingTriggers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 3 - Premium: Advanced + Purchasing Behaviour + Solution Requirements + CMI Insights
  const renderProposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#A5D6A7] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Professional Drivers
            </th>
            <th colSpan={3} className="bg-[#9370DB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-white">
              Purchasing Behaviour Metrics
            </th>
            <th colSpan={3} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Solution Requirements
            </th>
            <th colSpan={2} className="bg-[#FFD700] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className={`${thCustomerInfo} min-w-[60px]`}>S.No.</th>
            <th className={`${thCustomerInfo} min-w-[180px]`}>Customer Name / Company Name</th>
            <th className={`${thCustomerInfo} min-w-[220px]`}>
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Commercial satellite operator / Government space agency / Defense contractor, etc.)</div>
            </th>
            <th className={`${thCustomerInfo} min-w-[200px]`}>
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(Space & Satellite Communications / Defense & Homeland Security, etc.)</div>
            </th>
            <th className={`${thCustomerInfo} min-w-[150px]`}>Total Annual Revenue (US$ Million)</th>
            <th className={`${thCustomerInfo} min-w-[200px]`}>
              <div>Customer Size / Scale</div>
              <div className="font-normal text-[10px] text-gray-600">(Large enterprise (global satellite fleet / multi-site ground network), etc.)</div>
            </th>
            <th className={`${thContact} min-w-[130px]`}>Key Contact Person</th>
            <th className={`${thContact} min-w-[130px]`}>Designation/Role</th>
            <th className={`${thContact} min-w-[150px]`}>Email Address</th>
            <th className={`${thContact} min-w-[140px]`}>Phone/WhatsApp Number</th>
            <th className={`${thContact} min-w-[150px]`}>LinkedIn Profile</th>
            <th className={`${thContact} min-w-[130px]`}>Website URL</th>
            <th className={`${thDrivers} min-w-[220px]`}>
              <div>Key Buying Criteria</div>
              <div className="font-normal text-[10px] text-gray-600">(High antenna performance and tracking accuracy / Multi-band frequency support, etc.)</div>
            </th>
            <th className={`${thDrivers} min-w-[220px]`}>
              <div>Key Pain Points</div>
              <div className="font-normal text-[10px] text-gray-600">(Limited ground coverage for growing constellations / High capex for upgrades, etc.)</div>
            </th>
            <th className={`${thDrivers} min-w-[220px]`}>
              <div>Upcoming Triggers and Initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">(LEO constellation expansion / Earth observation program launch, etc.)</div>
            </th>
            <th className={`${thPurchasing} min-w-[200px]`}>
              <div>Budget Ownership</div>
              <div className="font-normal text-[10px] text-gray-600">(CTO / VP Engineering / Ground Segment Director / Satellite Operations Head, etc.)</div>
            </th>
            <th className={`${thPurchasing} min-w-[220px]`}>
              <div>Procurement Model</div>
              <div className="font-normal text-[10px] text-gray-600">(Direct procurement from OEMs / EPC or prime contractor-led procurement, etc.)</div>
            </th>
            <th className={`${thPurchasing} min-w-[220px]`}>
              <div>Preferred Engagement Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Pilot deployment at one station / Proof of concept for new frequency band, etc.)</div>
            </th>
            <th className={`${thSolution} min-w-[220px]`}>
              <div>Preferred Solution Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Antenna systems / RF uplink and downlink equipment / TT&C systems, etc.)</div>
            </th>
            <th className={`${thSolution} min-w-[220px]`}>
              <div>Preferred Deployment Model</div>
              <div className="font-normal text-[10px] text-gray-600">(On-premise ground infrastructure / Hybrid ground + cloud-based processing, etc.)</div>
            </th>
            <th className={`${thSolution} min-w-[220px]`}>
              <div>Performance Expectations</div>
              <div className="font-normal text-[10px] text-gray-600">(Near-zero mission downtime / High link availability / Real-time TT&C, etc.)</div>
            </th>
            <th className={`${thCMI} min-w-[220px]`}>
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
            </th>
            <th className={`${thCMI} min-w-[220px]`}>Additional Comments/Notes By CMI team</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((c, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className={`${td} text-center`}>{c.sNo}</td>
              <td className={td}>{c.customerName}</td>
              <td className={td}>{c.businessOverview}</td>
              <td className={td}>{c.industryVertical}</td>
              <td className={td}>{c.totalAnnualRevenue}</td>
              <td className={td}>{c.customerSizeScale}</td>
              <td className={td}>{c.keyContactPerson}</td>
              <td className={td}>{c.designationRole}</td>
              <td className={td}>{c.emailAddress}</td>
              <td className={td}>{c.phoneWhatsApp}</td>
              <td className={td}>{c.linkedInProfile}</td>
              <td className={td}>{c.websiteUrl}</td>
              <td className={td}>{c.keyBuyingCriteria}</td>
              <td className={td}>{c.keyPainPoints}</td>
              <td className={td}>{c.upcomingTriggers}</td>
              <td className={td}>{c.budgetOwnership}</td>
              <td className={td}>{c.procurementModel}</td>
              <td className={td}>{c.preferredEngagementType}</td>
              <td className={td}>{c.preferredSolutionType}</td>
              <td className={td}>{c.preferredDeploymentModel}</td>
              <td className={td}>{c.performanceExpectations}</td>
              <td className={td}>{c.customerBenchmarkingSummary}</td>
              <td className={td}>{c.additionalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">{title || 'Customer Intelligence Database'}</h2>

      <Preposition
        title="Proposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderProposition1Table()}
      </Preposition>

      <Preposition
        title="Proposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderProposition2Table()}
      </Preposition>

      <Preposition
        title="Proposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderProposition3Table()}
      </Preposition>
    </div>
  )
}
