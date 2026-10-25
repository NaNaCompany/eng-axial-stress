export const tool = {
  "id": "E032",
  "title": "축하중 평균 응력 계산기",
  "inputs_text": "축방향 하중 F [N], 유효 단면적 A [m²]",
  "formula": "σ_avg = F / A",
  "output_text": "평균 축응력 σ_avg [Pa]",
  "assumptions": "A>0. 중심 축하중·평균 단면 응력이며 노치·구멍·국부 응력집중은 계산하지 않는다. 인장 양수·압축 음수 규칙을 표시한다.",
  "purpose": "인장 하중 단면 응력 계산 / 시편·봉재 검산",
  "sources": [
    {
      "label": "OpenStax · Stress, Strain, and Elastic Modulus",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/12-3-stress-strain-and-elastic-modulus"
    }
  ],
  "slug": "eng-axial-stress",
  "category": "재료",
  "result_label": "평균 축응력 σ_avg",
  "result_dimension": "pressure",
  "fields": [
    {
      "key": "f",
      "label": "축방향 하중 F",
      "dimension": "force",
      "example": 10000,
      "constraint": "signed",
      "display_unit": "N",
      "display_value": "10000"
    },
    {
      "key": "a",
      "label": "유효 단면적 A",
      "dimension": "area",
      "example": 0.0001,
      "constraint": "positive",
      "display_unit": "mm2",
      "display_value": "100"
    }
  ],
  "site": "https://nanalab.kr/eng-axial-stress/",
  "repository": "https://github.com/NaNaCompany/eng-axial-stress",
  "condition": "",
  "output_unit": "MPa"
};
