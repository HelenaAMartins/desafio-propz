import * as Styled from "./styled";

const Footer = () => {
  return (
    <Styled.FooterWrapper>
      <img src="/footer-img.png" />
      <Styled.FooterInfo>
        Propz S.A. Central de Atendimento - Consultas, informações e serviços
        transacionais: 45544-0097 (capitais e regiões metropolitanas) e 0800 778
        5658(demais localidades), atendimento de segunda à sábado, das 8h às
        22h, exceto feriados. SA Propz - Reclamações, cancelamentos e
        informações gerais: 0800 985 9365. Deficiência auditiva ou fala: 0800
        722 0088 (atendimento 24 horas, 7 dias por semana). Ouvidoria - Demandas
        não solucionadas pelos demais Canais de Atendimento: 0800 727 9599
        (atendimento de segunda à sexta-feira, das 8h às 18h, exceto feriados).
      </Styled.FooterInfo>
    </Styled.FooterWrapper>
  );
};

export default Footer;
