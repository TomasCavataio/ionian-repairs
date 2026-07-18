import { stripBasePath, withBasePath } from '../config/site'

export type Locale = 'el' | 'en'

const el = {
  localeName: 'Ελληνικά',
  languageSwitch: 'Αλλαγή γλώσσας στα Αγγλικά',
  targetFlagAlt: 'Σημαία Ηνωμένου Βασιλείου',
  skip: 'Μετάβαση στο κύριο περιεχόμενο',
  company: 'Ιόνια Τεχνική Κεφαλονιάς',
  companyShort: 'Ιόνια Τεχνική',
  brandLocality: 'Ληξούρι · Κεφαλονιά',
  navLabel: 'Κύρια πλοήγηση',
  nav: [
    { label: 'Αρχική', href: '#home' },
    { label: 'Υπηρεσίες', href: '#services' },
    { label: 'Έργα', href: '#projects' },
    { label: 'Περιοχές Εξυπηρέτησης', href: '#areas' },
    { label: 'Σχετικά με εμάς', href: '#about' },
    { label: 'Επικοινωνία', href: '#contact' },
  ],
  quote: 'Ζητήστε προσφορά',
  menuOpen: 'Άνοιγμα μενού',
  menuClose: 'Κλείσιμο μενού',
  eyebrow: 'Τεχνικές εργασίες · Κεφαλονιά',
  hero: {
    title: 'Επισκευές και ανακαινίσεις που αντέχουν στον χρόνο',
    description: 'Με έδρα το Ληξούρι, αναλαμβάνουμε εργασίες επισκευής, συντήρησης και ανακαίνισης σε κατοικίες και επαγγελματικούς χώρους σε όλη την Κεφαλονιά.',
    primary: 'Ζητήστε εκτίμηση',
    secondary: 'Δείτε τις υπηρεσίες μας',
    location: 'Ληξούρι · Όλη η Κεφαλονιά',
    imageAlt: 'Ανακαινισμένη αυλή με ασβεστωμένους τοίχους, πέτρινο δάπεδο και μπλε ξύλινη πόρτα',
  },
  trust: [
    'Άμεση επικοινωνία',
    'Ξεκάθαρες εκτιμήσεις',
    'Προσεγμένη εργασία',
    'Εξυπηρέτηση σε όλη την Κεφαλονιά',
  ],
  sections: {
    servicesKicker: '01 · Υπηρεσίες',
    servicesTitle: 'Κάθε εργασία, με τη φροντίδα που απαιτεί ο χώρος σας.',
    servicesIntro: 'Από μια στοχευμένη επισκευή έως μια ολοκληρωμένη ανακαίνιση, εξετάζουμε πρώτα τι πραγματικά χρειάζεται το ακίνητο.',
    processKicker: '02 · Τρόπος εργασίας',
    processTitle: 'Από την πρώτη επικοινωνία έως την ολοκλήρωση',
    processIntro: 'Μια καθαρή διαδικασία βοηθά κάθε απόφαση να γίνεται με σιγουριά — πριν ξεκινήσει οποιαδήποτε εργασία.',
    projectsKicker: '03 · Έργα',
    projectsTitle: 'Χώροι φτιαγμένοι για την καθημερινή ζωή.',
    projectsIntro: 'Η ενότητα είναι έτοιμη να φιλοξενήσει πραγματικά έργα, φωτογραφίες πριν και μετά και λεπτομέρειες υλικών.',
    areasKicker: '04 · Περιοχές',
    areasTitle: 'Με έδρα το Ληξούρι, δίπλα σας σε όλη την Κεφαλονιά',
    areasText: 'Εξυπηρετούμε κατοικίες, εξοχικά και επαγγελματικούς χώρους σε ολόκληρο το νησί, ανάλογα με το είδος και την έκταση της εργασίας.',
    whyKicker: '05 · Η προσέγγισή μας',
    whyTitle: 'Γιατί να μας επιλέξετε',
    whyIntro: 'Για εμάς, η καλή τεχνική εργασία ξεκινά με προσεκτική ακρόαση και ολοκληρώνεται με σεβασμό στον χώρο.',
    faqKicker: '06 · Συχνές ερωτήσεις',
    faqTitle: 'Χρήσιμες απαντήσεις, πριν ξεκινήσουμε.',
  },
  services: [
    { icon: 'plumbing', title: 'Υδραυλικές εργασίες', text: 'Επισκευές, αντικαταστάσεις και νέες εγκαταστάσεις για μπάνια, κουζίνες και εξωτερικούς χώρους.' },
    { icon: 'renovation', title: 'Ανακαινίσεις κατοικιών', text: 'Ολοκληρωμένες ή μερικές ανακαινίσεις με σωστό σχεδιασμό, προσεγμένες λεπτομέρειες και λειτουργικά αποτελέσματα.' },
    { icon: 'repair', title: 'Επισκευές και συντήρηση', text: 'Μικρές και μεγάλες τεχνικές εργασίες για κατοικίες, εξοχικά και επαγγελματικούς χώρους.' },
    { icon: 'painting', title: 'Ελαιοχρωματισμοί', text: 'Εσωτερικοί και εξωτερικοί χρωματισμοί με σωστή προετοιμασία επιφανειών και καθαρό τελείωμα.' },
    { icon: 'flooring', title: 'Εργασίες δαπέδων', text: 'Τοποθέτηση, επισκευή και αντικατάσταση δαπέδων για εσωτερικούς και εξωτερικούς χώρους.' },
    { icon: 'roofing', title: 'Εργασίες στέγης', text: 'Επισκευές, συντήρηση και προστασία στεγών από τη φθορά και τις καιρικές συνθήκες.' },
    { icon: 'gutters', title: 'Υδρορροές', text: 'Τοποθέτηση, επισκευή και συντήρηση υδρορροών και σωλήνων απορροής ομβρίων.' },
    { icon: 'insulation', title: 'Μονώσεις και στεγανοποιήσεις', text: 'Προστασία από υγρασία, βροχή και φθορές με λύσεις κατάλληλες για το κλίμα του νησιού.' },
    { icon: 'outdoor', title: 'Εργασίες εξωτερικών χώρων', text: 'Επισκευές σε αυλές, βεράντες, τοίχους, σκάλες και περιβάλλοντες χώρους.' },
  ],
  serviceCta: 'Δεν βρίσκετε την εργασία που χρειάζεστε; Επικοινωνήστε μαζί μας.',
  process: [
    { title: 'Μιλάμε για τις ανάγκες σας', text: 'Μας περιγράφετε την εργασία, την τοποθεσία και το αποτέλεσμα που θέλετε.' },
    { title: 'Αξιολογούμε τον χώρο', text: 'Εξετάζουμε την κατάσταση και προτείνουμε την κατάλληλη λύση.' },
    { title: 'Συμφωνούμε το πλάνο εργασιών', text: 'Καθορίζουμε με σαφήνεια το αντικείμενο, τα υλικά και τα επόμενα βήματα.' },
    { title: 'Ολοκληρώνουμε με προσοχή', text: 'Εργαζόμαστε με συνέπεια, καθαριότητα και σεβασμό στον χώρο σας.' },
  ],
  filters: ['Όλα', 'Ανακαινίσεις', 'Εσωτερικοί χώροι', 'Εξωτερικοί χώροι', 'Επισκευές'],
  projects: [
    { category: 'Ανακαινίσεις', title: 'Υπνοδωμάτιο με πέτρινη επένδυση', meta: 'Ολοκληρωμένη ανακαίνιση', image: 'project-meraki-1' },
    { category: 'Εσωτερικοί χώροι', title: 'Μπάνιο με μαρμάρινες επιφάνειες', meta: 'Ολοκληρωμένη ανακαίνιση', image: 'project-meraki-2' },
    { category: 'Εσωτερικοί χώροι', title: 'Φωτεινό καθιστικό', meta: 'Ολοκληρωμένη ανακαίνιση', image: 'project-meraki-3' },
  ],
  projectDemo: 'Πραγματικό έργο',
  projectAlt: 'Φωτογραφία ολοκληρωμένου έργου ανακαίνισης',
  projectEmpty: 'Δεν υπάρχουν ακόμη δείγματα σε αυτή την κατηγορία.',
  areas: ['Ληξούρι', 'Αργοστόλι', 'Λειβαθώ', 'Σάμη', 'Αγία Ευφημία', 'Πόρος', 'Σκάλα', 'Φισκάρδο', 'Άσσος', 'Παλική'],
  routeLabel: 'Χάρτης της Κεφαλονιάς με τις περιοχές εξυπηρέτησης',
  mapCredit: 'Γεωγραφικά δεδομένα © OpenStreetMap contributors',
  areasNote: 'Η διαθεσιμότητα επιβεβαιώνεται ανάλογα με την τοποθεσία και το εύρος της εργασίας.',
  why: [
    'Τοπική παρουσία στο Ληξούρι',
    'Εξυπηρέτηση σε όλη την Κεφαλονιά',
    'Προσεκτική αξιολόγηση κάθε εργασίας',
    'Καθαρή και άμεση επικοινωνία',
    'Σεβασμός στον χώρο και την περιουσία σας',
    'Λύσεις προσαρμοσμένες στις πραγματικές ανάγκες του ακινήτου',
  ],
  faqs: [
    { q: 'Σε ποιες περιοχές της Κεφαλονιάς αναλαμβάνετε εργασίες;', a: 'Με έδρα το Ληξούρι, εξετάζουμε εργασίες σε ολόκληρη την Κεφαλονιά. Επικοινωνήστε μαζί μας με την ακριβή περιοχή και το είδος της εργασίας για να επιβεβαιώσουμε τη δυνατότητα εξυπηρέτησης.' },
    { q: 'Αναλαμβάνετε μικρές επισκευές;', a: 'Ναι, εξετάζουμε τόσο μικρές επισκευές όσο και μεγαλύτερες παρεμβάσεις. Η διαθεσιμότητα εξαρτάται από το είδος, την τοποθεσία και τον προγραμματισμό των εργασιών.' },
    { q: 'Μπορείτε να αναλάβετε ολοκληρωμένη ανακαίνιση;', a: 'Μπορούμε να συζητήσουμε ολοκληρωμένες ή μερικές ανακαινίσεις και να αξιολογήσουμε τις ανάγκες του χώρου πριν διαμορφωθεί το κατάλληλο πλάνο.' },
    { q: 'Πώς μπορώ να ζητήσω εκτίμηση;', a: 'Στείλτε μας βασικές πληροφορίες για το ακίνητο, την τοποθεσία και την εργασία που χρειάζεστε. Θα επικοινωνήσουμε μαζί σας για διευκρινίσεις και, όπου χρειάζεται, για αξιολόγηση του χώρου.' },
    { q: 'Αναλαμβάνετε εξοχικές κατοικίες όταν ο ιδιοκτήτης βρίσκεται στο εξωτερικό;', a: 'Μπορούμε να εξετάσουμε εργασίες σε εξοχικές κατοικίες και να συμφωνήσουμε έναν πρακτικό τρόπο επικοινωνίας. Οι λεπτομέρειες και η πρόσβαση στο ακίνητο επιβεβαιώνονται πριν τον προγραμματισμό.' },
    { q: 'Πόσο νωρίς πρέπει να επικοινωνήσω μαζί σας;', a: 'Όσο νωρίτερα έχουμε μια σαφή εικόνα της εργασίας, τόσο καλύτερα μπορούμε να εξετάσουμε τον προγραμματισμό. Επικοινωνήστε μαζί μας για να επιβεβαιώσουμε την τρέχουσα διαθεσιμότητα.' },
    { q: 'Αναλαμβάνετε επείγουσες εργασίες;', a: 'Η δυνατότητα ανάληψης επείγουσας εργασίας εξαρτάται από τη φύση του προβλήματος, την τοποθεσία και την τρέχουσα διαθεσιμότητα. Καλέστε μας για να δούμε αν μπορούμε να βοηθήσουμε.' },
  ],
  contact: {
    kicker: '07 · Επικοινωνία',
    title: 'Ας συζητήσουμε την εργασία που χρειάζεστε',
    text: 'Περιγράψτε μας τον χώρο, την τοποθεσία και το είδος της εργασίας. Θα επικοινωνήσουμε μαζί σας για να εξετάσουμε τα επόμενα βήματα.',
    direct: 'Προτιμάτε άμεση επικοινωνία;',
    call: 'Κλήση',
    whatsapp: 'WhatsApp',
    pending: 'Τα στοιχεία επικοινωνίας θα προστεθούν πριν τη δημοσίευση.',
    fields: {
      name: 'Ονοματεπώνυμο', phone: 'Τηλέφωνο', email: 'Email', location: 'Περιοχή ακινήτου',
      service: 'Είδος εργασίας', details: 'Περιγραφή εργασίας', method: 'Προτιμώμενος τρόπος επικοινωνίας',
      consent: 'Συμφωνώ να χρησιμοποιηθούν τα στοιχεία μου αποκλειστικά για την απάντηση στο αίτημά μου.',
    },
    placeholders: {
      name: 'Το όνομά σας', phone: '+30 …', email: 'name@example.com', location: 'π.χ. Ληξούρι',
      details: 'Περιγράψτε σύντομα τον χώρο και την εργασία…', select: 'Επιλέξτε',
    },
    services: ['Υδραυλικά', 'Ανακαίνιση', 'Επισκευή', 'Βάψιμο', 'Δάπεδα', 'Στέγη', 'Υδρορροές', 'Μόνωση', 'Εξωτερικός χώρος', 'Άλλο'],
    methods: ['Τηλέφωνο', 'Email', 'WhatsApp'],
    send: 'Αποστολή αιτήματος',
    sending: 'Αποστολή…',
    required: 'Συμπληρώστε αυτό το πεδίο.',
    emailError: 'Εισαγάγετε μια έγκυρη διεύθυνση email.',
    consentError: 'Απαιτείται η συγκατάθεσή σας για την αποστολή.',
    success: 'Το αίτημά σας στάλθηκε με επιτυχία. Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.',
    error: 'Δεν ήταν δυνατή η αποστολή. Δοκιμάστε ξανά ή επικοινωνήστε μαζί μας.',
    integration: 'Τα στοιχεία σας αποστέλλονται με ασφάλεια αποκλειστικά για την απάντηση στο αίτημά σας.',
    privacyLink: 'Πολιτική απορρήτου',
  },
  footer: {
    text: 'Τεχνικές εργασίες, επισκευές και ανακαινίσεις με έδρα το Ληξούρι και εξυπηρέτηση σε όλη την Κεφαλονιά.',
    navigation: 'Πλοήγηση', services: 'Υπηρεσίες', contact: 'Επικοινωνία', location: 'Ληξούρι, Κεφαλονιά',
    placeholder: 'Εκκρεμούν πραγματικά στοιχεία', rights: 'Με επιφύλαξη παντός δικαιώματος.', backTop: 'Επιστροφή στην κορυφή',
  },
  privacy: {
    breadcrumbHome: 'Αρχική', title: 'Πολιτική απορρήτου', updated: 'Προσχέδιο πριν τη δημοσίευση',
    intro: 'Η παρούσα σελίδα εξηγεί πώς θα χρησιμοποιούνται τα στοιχεία που υποβάλλονται μέσω της φόρμας επικοινωνίας. Τα νομικά και εταιρικά στοιχεία που εκκρεμούν πρέπει να συμπληρωθούν πριν τη δημοσίευση.',
    sections: [
      { title: 'Υπεύθυνος επεξεργασίας', text: '[ΝΟΜΙΚΗ ΕΠΩΝΥΜΙΑ], [ΔΙΕΥΘΥΝΣΗ], [ΑΦΜ], ReginaLaka22@gmail.com, +30 694 603 7783.' },
      { title: 'Στοιχεία που συλλέγονται', text: 'Όνομα, στοιχεία επικοινωνίας, περιοχή ακινήτου και πληροφορίες που επιλέγετε να συμπεριλάβετε στο αίτημά σας.' },
      { title: 'Σκοπός και διατήρηση', text: 'Τα στοιχεία χρησιμοποιούνται για την απάντηση στο αίτημά σας και διατηρούνται μόνο για όσο χρειάζεται για την επικοινωνία και τις νόμιμες υποχρεώσεις.' },
      { title: 'Πάροχος φόρμας', text: 'Η αποστολή της φόρμας πραγματοποιείται μέσω FormSubmit. Δεν χρησιμοποιούνται μη απαραίτητα cookies σε αυτή την έκδοση.' },
      { title: 'Τα δικαιώματά σας', text: 'Μπορείτε να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή των στοιχείων σας μέσω των στοιχείων επικοινωνίας που θα αναρτηθούν πριν τη δημοσίευση.' },
    ],
  },
  seo: {
    title: 'Επισκευές & Ανακαινίσεις στην Κεφαλονιά | Ιόνια Τεχνική',
    description: 'Επισκευές, συντήρηση και ανακαινίσεις κατοικιών και επαγγελματικών χώρων. Με έδρα το Ληξούρι και εξυπηρέτηση σε όλη την Κεφαλονιά.',
    imageAlt: 'Ιόνια Τεχνική Κεφαλονιάς — επισκευές και ανακαινίσεις',
  },
} as const

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : T extends object
      ? { readonly [K in keyof T]: Widen<T[K]> }
      : T

const en: Widen<typeof el> = {
  localeName: 'English',
  languageSwitch: 'Switch language to Greek',
  targetFlagAlt: 'Greek flag',
  skip: 'Skip to main content',
  company: 'Ionian Technical Kefalonia',
  companyShort: 'Ionian Technical',
  brandLocality: 'Lixouri · Kefalonia',
  navLabel: 'Main navigation',
  nav: [
    { label: 'Home', href: '#home' }, { label: 'Services', href: '#services' }, { label: 'Projects', href: '#projects' },
    { label: 'Service Areas', href: '#areas' }, { label: 'About Us', href: '#about' }, { label: 'Contact', href: '#contact' },
  ],
  quote: 'Request a quote', menuOpen: 'Open menu', menuClose: 'Close menu', eyebrow: 'Property services · Kefalonia',
  hero: {
    title: 'Repairs and renovations built to last',
    description: 'Based in Lixouri, we provide repair, maintenance and renovation services for homes and commercial properties across Kefalonia.',
    primary: 'Request an estimate', secondary: 'Explore our services', location: 'Lixouri · All of Kefalonia',
    imageAlt: 'Renovated courtyard with limewashed walls, stone paving and a deep blue timber door',
  },
  trust: ['Direct communication', 'Clear estimates', 'Careful workmanship', 'Service across Kefalonia'],
  sections: {
    servicesKicker: '01 · Services', servicesTitle: 'Every project, with the care your property deserves.',
    servicesIntro: 'From a focused repair to a complete renovation, we first look at what your property genuinely needs.',
    processKicker: '02 · How we work', processTitle: 'From the first conversation to completion',
    processIntro: 'A clear process makes every decision easier — before any work begins.',
    projectsKicker: '03 · Projects', projectsTitle: 'Spaces made for everyday life.',
    projectsIntro: 'This section is ready for real projects, before-and-after photography and considered material details.',
    areasKicker: '04 · Service areas', areasTitle: 'Based in Lixouri, working across Kefalonia',
    areasText: 'We serve homes, holiday properties and commercial spaces throughout the island, depending on the type and scope of the project.',
    whyKicker: '05 · Our approach', whyTitle: 'Why choose us',
    whyIntro: 'For us, good technical work starts with careful listening and ends with respect for your space.',
    faqKicker: '06 · Frequently asked questions', faqTitle: 'Useful answers, before we begin.',
  },
  services: [
    { icon: 'plumbing', title: 'Plumbing work', text: 'Repairs, replacements and new installations for bathrooms, kitchens and outdoor areas.' },
    { icon: 'renovation', title: 'Home renovations', text: 'Complete or partial renovations with thoughtful planning, careful detailing and practical results.' },
    { icon: 'repair', title: 'Repairs and maintenance', text: 'Small and large-scale technical work for homes, holiday properties and commercial spaces.' },
    { icon: 'painting', title: 'Painting and decorating', text: 'Interior and exterior painting with thorough surface preparation and a clean finish.' },
    { icon: 'flooring', title: 'Flooring work', text: 'Installation, repair and replacement of flooring for interior and exterior spaces.' },
    { icon: 'roofing', title: 'Roofing work', text: 'Roof repairs, maintenance and protection from deterioration and island weather.' },
    { icon: 'gutters', title: 'Gutters', text: 'Installation, repair and maintenance of gutters and rainwater downpipes.' },
    { icon: 'insulation', title: 'Insulation and waterproofing', text: 'Protection from damp, rain and deterioration with solutions suited to the island climate.' },
    { icon: 'outdoor', title: 'Outdoor works', text: 'Repairs to courtyards, terraces, walls, stairs and surrounding areas.' },
  ],
  serviceCta: 'Can’t find the service you need? Contact us.',
  process: [
    { title: 'We discuss what you need', text: 'Tell us about the work, its location and the result you would like to achieve.' },
    { title: 'We assess the property', text: 'We examine the current condition and recommend an appropriate solution.' },
    { title: 'We agree the work plan', text: 'We clearly define the scope, materials and next steps.' },
    { title: 'We complete with care', text: 'We work consistently, cleanly and with respect for your property.' },
  ],
  filters: ['All', 'Renovations', 'Interiors', 'Exteriors', 'Repairs'],
  projects: [
    { category: 'Renovations', title: 'Bedroom with stone feature wall', meta: 'Completed renovation', image: 'project-meraki-1' },
    { category: 'Interiors', title: 'Bathroom with marble surfaces', meta: 'Completed renovation', image: 'project-meraki-2' },
    { category: 'Interiors', title: 'Bright living space', meta: 'Completed renovation', image: 'project-meraki-3' },
  ],
  projectDemo: 'Completed project',
  projectAlt: 'Completed renovation project photography',
  projectEmpty: 'No examples have been added to this category yet.',
  areas: ['Lixouri', 'Argostoli', 'Leivatho', 'Sami', 'Agia Efimia', 'Poros', 'Skala', 'Fiskardo', 'Assos', 'Paliki'],
  routeLabel: 'Map of Kefalonia showing the areas we serve',
  mapCredit: 'Geographic data © OpenStreetMap contributors',
  areasNote: 'Availability is confirmed according to the location and scope of each project.',
  why: ['Local presence in Lixouri', 'Service across Kefalonia', 'Careful assessment of every project', 'Clear and direct communication', 'Respect for your property', 'Solutions adapted to the real needs of each building'],
  faqs: [
    { q: 'Which areas of Kefalonia do you serve?', a: 'Based in Lixouri, we consider projects throughout Kefalonia. Tell us the exact location and type of work so we can confirm whether we can help.' },
    { q: 'Do you take on small repairs?', a: 'Yes, we consider both small repairs and larger interventions. Availability depends on the type of work, location and current schedule.' },
    { q: 'Can you manage a complete renovation?', a: 'We can discuss complete or partial renovations and assess the property before developing an appropriate work plan.' },
    { q: 'How can I request an estimate?', a: 'Send us the basic details of the property, its location and the work required. We will contact you for clarification and, where needed, arrange an assessment.' },
    { q: 'Can you work on holiday homes when the owner is abroad?', a: 'We can consider work on holiday properties and agree a practical communication process. Access and project details are confirmed before scheduling.' },
    { q: 'How early should I get in touch?', a: 'The sooner we understand the scope, the better we can consider scheduling. Contact us to confirm current availability.' },
    { q: 'Do you handle urgent work?', a: 'Our ability to take on urgent work depends on the nature of the issue, the location and current availability. Call us so we can see whether we can assist.' },
  ],
  contact: {
    kicker: '07 · Contact', title: 'Let’s discuss the work you need',
    text: 'Tell us about the property, its location and the type of work required. We’ll contact you to discuss the next steps.',
    direct: 'Prefer to speak directly?', call: 'Call', whatsapp: 'WhatsApp', pending: 'Contact details will be added before launch.',
    fields: {
      name: 'Full name', phone: 'Phone', email: 'Email', location: 'Property location', service: 'Type of work',
      details: 'Project details', method: 'Preferred contact method',
      consent: 'I agree that my details may be used only to respond to my enquiry.',
    },
    placeholders: {
      name: 'Your name', phone: '+34 …', email: 'name@example.com', location: 'e.g. Lixouri',
      details: 'Briefly describe the property and the work…', select: 'Select',
    },
    services: ['Plumbing', 'Renovation', 'Repair', 'Painting', 'Flooring', 'Roofing', 'Gutters', 'Insulation', 'Outdoor work', 'Other'],
    methods: ['Phone', 'Email', 'WhatsApp'], send: 'Send request', sending: 'Sending…',
    required: 'Please complete this field.', emailError: 'Enter a valid email address.',
    consentError: 'Your consent is required to send the form.',
    success: 'Your enquiry was sent successfully. We’ll contact you as soon as possible.',
    error: 'The request could not be sent. Please try again or contact us directly.',
    integration: 'Your details are sent securely and used only to respond to your enquiry.',
    privacyLink: 'Privacy policy',
  },
  footer: {
    text: 'Technical work, repairs and renovations based in Lixouri and available across Kefalonia.',
    navigation: 'Navigation', services: 'Services', contact: 'Contact', location: 'Lixouri, Kefalonia',
    placeholder: 'Real details pending', rights: 'All rights reserved.', backTop: 'Back to top',
  },
  privacy: {
    breadcrumbHome: 'Home', title: 'Privacy policy', updated: 'Pre-launch draft',
    intro: 'This page explains how details submitted through the contact form will be used. Outstanding legal and company information must be completed before launch.',
    sections: [
      { title: 'Data controller', text: '[LEGAL COMPANY NAME], [ADDRESS], [TAX NUMBER], ReginaLaka22@gmail.com, +34 604 239 291.' },
      { title: 'Information collected', text: 'Name, contact details, property location and any information you choose to include in your enquiry.' },
      { title: 'Purpose and retention', text: 'Information is used to respond to your enquiry and kept only as long as required for communication and legal obligations.' },
      { title: 'Form provider', text: 'Form submissions are delivered through FormSubmit. No non-essential cookies are used in this version.' },
      { title: 'Your rights', text: 'You may request access, correction or deletion of your data using the contact details that will be published before launch.' },
    ],
  },
  seo: {
    title: 'Repairs & Renovations in Kefalonia | Ionian Technical',
    description: 'Repairs, maintenance and renovation services for homes and commercial properties. Based in Lixouri and serving all of Kefalonia.',
    imageAlt: 'Ionian Technical Kefalonia — repairs and renovations',
  },
}

export const content = { el, en } as const
export type SiteContent = Widen<typeof el>

export function localeFromPath(pathname: string): Locale {
  const localizedPathname = stripBasePath(pathname)
  return localizedPathname === '/el' || localizedPathname.startsWith('/el/') ? 'el' : 'en'
}

export function localizedPath(locale: Locale, privacy = false) {
  const route = locale === 'el'
    ? (privacy ? '/el/privacy' : '/el')
    : (privacy ? '/privacy' : '/')
  return withBasePath(route)
}
