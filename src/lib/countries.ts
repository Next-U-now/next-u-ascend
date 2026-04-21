export interface Country {
  name: string;
  code: string; // ISO
  dial: string;
  flag: string;
}

// Official country list with dial codes and flag emojis
export const countries: Country[] = [
  { name: "Ecuador", code: "EC", dial: "+593", flag: "🇪🇨" },
  { name: "Estados Unidos", code: "US", dial: "+1", flag: "🇺🇸" },
  { name: "México", code: "MX", dial: "+52", flag: "🇲🇽" },
  { name: "Colombia", code: "CO", dial: "+57", flag: "🇨🇴" },
  { name: "Perú", code: "PE", dial: "+51", flag: "🇵🇪" },
  { name: "Argentina", code: "AR", dial: "+54", flag: "🇦🇷" },
  { name: "Chile", code: "CL", dial: "+56", flag: "🇨🇱" },
  { name: "Venezuela", code: "VE", dial: "+58", flag: "🇻🇪" },
  { name: "Bolivia", code: "BO", dial: "+591", flag: "🇧🇴" },
  { name: "Paraguay", code: "PY", dial: "+595", flag: "🇵🇾" },
  { name: "Uruguay", code: "UY", dial: "+598", flag: "🇺🇾" },
  { name: "Brasil", code: "BR", dial: "+55", flag: "🇧🇷" },
  { name: "Costa Rica", code: "CR", dial: "+506", flag: "🇨🇷" },
  { name: "Panamá", code: "PA", dial: "+507", flag: "🇵🇦" },
  { name: "Guatemala", code: "GT", dial: "+502", flag: "🇬🇹" },
  { name: "Honduras", code: "HN", dial: "+504", flag: "🇭🇳" },
  { name: "El Salvador", code: "SV", dial: "+503", flag: "🇸🇻" },
  { name: "Nicaragua", code: "NI", dial: "+505", flag: "🇳🇮" },
  { name: "República Dominicana", code: "DO", dial: "+1", flag: "🇩🇴" },
  { name: "Cuba", code: "CU", dial: "+53", flag: "🇨🇺" },
  { name: "Puerto Rico", code: "PR", dial: "+1", flag: "🇵🇷" },
  { name: "España", code: "ES", dial: "+34", flag: "🇪🇸" },
  { name: "Canadá", code: "CA", dial: "+1", flag: "🇨🇦" },
  { name: "Reino Unido", code: "GB", dial: "+44", flag: "🇬🇧" },
  { name: "Francia", code: "FR", dial: "+33", flag: "🇫🇷" },
  { name: "Alemania", code: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "Italia", code: "IT", dial: "+39", flag: "🇮🇹" },
  { name: "Portugal", code: "PT", dial: "+351", flag: "🇵🇹" },
  { name: "Países Bajos", code: "NL", dial: "+31", flag: "🇳🇱" },
  { name: "China", code: "CN", dial: "+86", flag: "🇨🇳" },
  { name: "Japón", code: "JP", dial: "+81", flag: "🇯🇵" },
  { name: "India", code: "IN", dial: "+91", flag: "🇮🇳" },
  { name: "Australia", code: "AU", dial: "+61", flag: "🇦🇺" },
];

export const defaultCountry = countries[0];
