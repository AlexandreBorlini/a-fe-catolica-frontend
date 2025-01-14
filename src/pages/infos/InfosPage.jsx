import Body from "../../components/body/Body";
import InfoText from "../../components/infos-text/InfoText";
import SubjectTitle from "../../components/subject-title/SubjectTitle";

function InfosPage() {

    return (
        <div>
            <Body> 
                <SubjectTitle>
                    CONTATO
                </SubjectTitle>

                <span className="flex justify-center text-center pb-6 pl-4 pr-4">
                    Tem alguma sugestão de referência, assunto ou melhoria para o site?
                </span>
                
                <InfoText title={"Email"}    info={"borlinialexandre@gmail.com"}/>
                <InfoText title={"Whatsapp"} info={"(27) 998556687"}/>

            </Body>
        </div>
    );
}

export default InfosPage;