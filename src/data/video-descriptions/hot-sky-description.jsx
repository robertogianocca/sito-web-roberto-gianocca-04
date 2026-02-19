import CreditsTitle from "@/components/Video/Credits/CreditsTitle";
import CreditsName from "@/components/Video/Credits/CreditsName";
import CreditsWrapper from "@/components/Video/Credits/CreditsWrapper";
import VideoDescription from "@/components/Video/Description/VideoDescription";

export const hotSkyDescription = {
  credits: (
    <CreditsWrapper>
      <CreditsTitle>Direction, Camera, Editing, Post-production:</CreditsTitle>
      <CreditsName>Roberto Gianocca</CreditsName>

      <CreditsTitle>Collaboration and Assistance:</CreditsTitle>
      <CreditsName>Caroline Cavalcante, Matteo Marazzi.</CreditsName>

      <CreditsTitle>Robot Technical Assistance:</CreditsTitle>
      <CreditsName>Carrara Modellismo</CreditsName>
    </CreditsWrapper>
  ),
  description: (
    <VideoDescription>
      Un giovane "vacuum cleaner" decide di dare un taglio alla sua vita abitudinaria e partire per
      un avventura, alla rassegna del gioco e di incontri speciali. Il film è stato realizzato con
      la preziosa collaborazione di Damiano Carrara per la creazione del personaggio.
    </VideoDescription>
  ),
};
