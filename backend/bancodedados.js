// Funções
// Retorna um número aletória entre um mínimo e um máximo
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Constantes
const NUM_USERS = 20;

const NAMES = [
  "Sarah Nogueira",
  "Nicolas Azevedo",
  "Diogo da Luz",
  "Levi Cavalcanti",
  "Murilo Barbosa",
  "Stella Nogueira",
  "Gustavo da Luz",
  "Pedro da Conceição",
  "Ryan Azevedo",
  "Ana Vitória Lopes",
  "Enzo Lopes",
  "Davi Lucca Nogueira",
  "Evelyn Cardoso",
  "Eduardo Fernandes",
  "Ana Laura Freitas",
  "Matheus Rodrigues",
  "Isadora Monteiro",
  "Natália Alves",
  "Lucas Cardoso",
  "Bruno Cunha"
];

const CITIES_STATES = [
  "Bento de Abreu-SP",
  "São Carlos-SP",
  "Aracaju-SE",
  "Araraquara-SP"
];

const PLANS = [
  "Unimed",
  "Bradesco Saúde",
  "Amil",
  "NotreDame",
  "Porto Seguro Saúde",
  "SulAmérica Saúde",
  "Allianz Saúde",
  "São Francisco",
  "Norden"
];

const DOCTORS = [
  "Adolfo Ferrão",
  "Borrás Fialho",
  "Casimiro Temes",
  "Celina Diniz",
  "Débora Campos",
  "Emílio Vasques",
  "Felicidade Macedo",
  "Gui Quintana",
  "Gávio Camillo",
  "Herberto Dias",
  "Inês Cesário",
  "Josué Pádua",
  "Mara Verissimo",
  "Marco Júdice",
  "Olívio Patrício",
  "Silvério Lessa",
  "Sérgio Tabalipa",
  "Tabalipa Mora",
  "Teodorico Albuquerque",
  "Ítalo Meneses"
];

const SPECIALITIES = [
  "Dermatologia",
  "Ginecologia",
  "Ortopedia",
  "Anestesiologia",
  "Pediatria",
  "Oftalmologia",
  "Neurologia",
  "Cardiologia",
  "Clínico Geral",
  "Psiquiatria"
];

module.exports = () => {
  const users = [];
  const doctors = [];

  for(let i = 0; i < NAMES.length; i++) {
    // Quebra a string de cidade-estado para pegar a cidade e seu estado
    const address = CITIES_STATES[randomIntFromInterval(0, CITIES_STATES.length - 1)].split("-");
    const city = address[0];
    const state = address[1];

    users.push({
      id: i+1,
      name: NAMES[i],
      city: city,
      state: state,
      healthcarePlan: PLANS[randomIntFromInterval(0, PLANS.length - 1)]   
    })


    // Aleatoriza a quantidade de planos que um(a) médico(a) 
    // aceita, assim como quais planos ele(a) aceitam
    const plansAccepted = [];
    const numPlansAccepted = randomIntFromInterval(1, 5);
    for(let i = 0; i < numPlansAccepted; i++) {
      const index = randomIntFromInterval(0, PLANS.length - 1);
      const plan = PLANS[index];
      if(plansAccepted.includes(plan) === false) {
        plansAccepted.push(plan);
      }
    }

    doctors.push({
      id: i + 1,
      name: DOCTORS[i],
      speciality: SPECIALITIES[randomIntFromInterval(0, SPECIALITIES.length - 1)],
      plansAccepted: plansAccepted
    })
  }

  return { 
    users,
    doctors
  };
}