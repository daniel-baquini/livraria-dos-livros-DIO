package com.backend.init;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.backend.entity.Book;
import com.backend.entity.User;
import com.backend.repository.BookRepository;
import com.backend.repository.UserRepository;

@Component
public class StartApplication implements CommandLineRunner {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;


    @Transactional
    @Override
    public void run(String... args) throws Exception {
        // Creating basic users, for app testing.
        // Hint: The way the users are retrieved from database, it's required to have
        // at least one role.
        
        User user = userRepository.findByUsername("admin");
        if(user == null) {
            user = new User();
            user.setName("Admin");
            user.setPassword(new BCryptPasswordEncoder().encode("admin123"));
            user.getRoles().add("ADMIN");
            user.setSurname("da Silva");
            user.setUsername("admin@app.com.br");
            userRepository.save(user);
        }

        user = userRepository.findByUsername("user");
        if(user == null) {
            user = new User();
            user.setName("User");
            user.setPassword(new BCryptPasswordEncoder().encode("user123"));
            user.getRoles().add("USER");
            user.setSurname("da Silva");
            user.setUsername("user@app.com.br");
            userRepository.save(user);
        }        

        this.initBooks();
    }

    private void initBooks() {
        this.bookRepository.save(new Book(
            "C. S. Lewis",
            "/images/books/1.jpg",
            "Em um dos períodos mais sombrios da humanidade, a Segunda Guerra Mundial, C.S. Lewis foi convidado pela BBC a fazer uma série de palestras pelo rádio com o intuito de explicar a fé cristã de forma simples e clara. Mais tarde, ajustado pelo próprio Lewis, esse material daria origem a Cristianismo puro e simples, um grande clássico da literatura. Na obra mais popular e acessível de seu legado, Lewis apresenta os principais elementos da cosmovisão cristã, gradativamente conduzindo o leitor a temas mais profundos e complexos, provocando reflexão e debate. Nesta edição especial e com tradução de uma das maiores especialistas em Lewis do Brasil, você vai encontrar as palavras que encorajaram e fortaleceram milhares de ouvintes em tempos de guerra ― e ainda reverberam mais de 70 anos depois.",
            "Cristianismo puro e simples",
            25.9,
            10,
            0.0,
            0
        ));

        this.bookRepository.save(new Book(
            "C. S. Lewis",
            "/images/books/2.jpg",
            "C.S. Lewis, considerado um dos maiores expoentes do cristianismo do século 21, influenciou nossa percepção e entendimento da fé cristã com maestria. Passados 50 anos da sua morte, os argumentos de Lewis continuam extraordinariamente persuasivos. Isso porque todo seu pensamento veio de uma vida cristã vivida intensamente. Somente um intelectual com uma fé tão profunda poderia pensar em razões tão convincentes ao defender e articular tal verdade.Como ser cristão traz o melhor do pensamento de Lewis sobre a prática cristã e sua expressão em nosso dia-a-dia. Uma coletânea de vários textos, artigos e cartas, esta obra brilhante e instigante proporciona conhecimento e direcionamento práticos que os cristãos poderão usar para nutrir a sua fé e tornarem-se discípulos mais devotos de Cristo.",
            "Como ser cristão",
            24.93,
            13,
            0.0,
            0
        ));

        this.bookRepository.save(new Book(
            "Bruce Shelley",
            "/images/books/3.jpg",
            "Já em sua quarta edição nos Estados Unidos, História do cristianismo tornou-se a principal escolha de leigos e líderes religiosos, inclusive sendo utilizado como texto-base em diversas salas de aula." + 
            "\nDe maneira clara e organizada, Dr. Bruce Shelley apresenta neste grande clássico a trajetória da igreja cristã para os leitores de hoje, usando como pano de fundo a vida de personagens importantes – suas motivações, as questões com as quais tiveram de lidar, as decisões que tomaram. O resultado é a História que se lê como uma história, quase tão dramática e emocionante como um romance. No entanto, não há ficção aqui, mas um trabalho minuciosamente pesquisado e cuidadosamente elaborado por Shelley com precisão histórica." +
            "\nA popularidade contínua deste livro comprova o sucesso da realização de seu propósito: tornar a história da igreja clara, inesquecível e acessível para todos os leitores." +
            "\nRecursos inclusos:" +
            "\n- Histórias claras de grandes nomes da história do cristianismo" +
            "\n- Explicações concisas de movimentos-chave" +
            "\n- Desenvolvimentos contemporâneos relacionados à propagação do evangelho" +
            "\n- A explosão do cristianismo no Hemisfério Sul ",
            "História do cristianismo: Uma obra completa e atual sobre a trajetória da igreja cristã desde as origens até o século XXI",
            49.90,
            2,
            0.0,
            0
        ));

        this.bookRepository.save(new Book(
            "C. S. Lewis",
            "/images/books/4.jpg",
            "Nos nove sermões que compõem uma de suas obras mais clássicas, O peso da glória, C.S. Lewis demonstra por que é um dos autores cristãos mais influentes da História. Ele é capaz de tratar os mais variados temas de modo brilhante, trazendo simplicidade e clareza a assuntos complexos, instigando tanto nossa alma quanto nosso intelecto. Agora com edição especial e nova tradução, O peso da glória traz aos leitores contemporâneos as mesmas palavras de inspiração, orientação e apologia da fé cristã que levaram alento a milhares de ouvintes em um tempo recheado de dúvidas.",
            "O peso da glória",
            19.5,
            8,
            0.0,
            0
        ));

        this.bookRepository.save(new Book(
            "Rodrigo Bibo",
            "/images/books/5.jpg",
            "O Deus cristão não pode ser domesticado" +
            "\nUma tentação constante que cerca a vida cristã é a inversão do chamado: a presunção de que Deus precisa abençoar o meu caminho e me seguir em meus planos e sonhos. Essa postura é enganosa e faz parecer que Deus só é fiel quando me abençoa. Mas e se Deus derrubar o meu sorvete, ele deixa de ser fiel? Claro que não. Às vezes, ele só quer chamar a minha atenção para o caminho certo. Eu já testemunhei gente adulta se comportando como criança por não ter a vida que pediu a Deus. Pediu errado! Neste livro, apresento o caminho do discipulado, o caminho para “sonhar” o que Deus já planejou.",
            "O Deus que destrói sonhos",
            24.38,
            7,
            0.0,
            0
        ));

        this.bookRepository.save(new Book(
            "Santo Agostinho",
            "/images/books/6.jpg",
            "Redigido no século IV, entre Antiguidade e Idade Média, as Confissões de Agostinho de Hipona são ainda hoje um livro surpreendente. Por um lado, pela densidade poética e pela originalidade da escrita, e por inaugurar o gênero da autobiografia como história da formação de uma personalidade, elas representam um marco único na história da literatura ocidental. Por outro, Agostinho elabora nelas uma nova maneira de fazer filosofia, estranha à tradição antiga, por ser baseada não apenas em conceitos abstratos e deduções, mas sobretudo na observação fina dos movimentos psicológicos, das motivações interiores e do significado de pequenos fatos e gestos cotidianos. O resultado é uma leitura incontornável para todos os que se interessam por filosofia, história ou religião.",
            "Confissões de santo Agostinho",
            44.07,
            1,
            0.0,
            0
        ));

        this.bookRepository.save(new Book(
            "William Lane Craig",
            "/images/books/7.jpg",
            "Neste livro o autor pretende oferecer quatro argumentos plausíveis segundo ele para a existência de Deus defender a historicidade da ressurreição de Jesus e abordar o problema do sofrimento. Além disso busca mostrar por que o relativismo religioso não consegue responder ao desejo de compreender as questões últimas da vida.",
            "Em guarda",
            32.16,
            10,
            0.0,
            0
        ));

        this.bookRepository.save(new Book(
            "William Lane Craig",
            "/images/books/8.jpg",
            "Nesta obra, além de abordar questões como sofrimento, dúvida, fracasso, existência do mal e orações não respondidas, o autor também encara questões que envolvem aborto e homossexualidade. O objetivo é que este livro possa ajudar o leitor em sua busca de compreender o plano divino.",
            "Apologética para questões difíceis da vida",
            21.87,
            15,
            0.0,
            0
        ));

    }
    
}
