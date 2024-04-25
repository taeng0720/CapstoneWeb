package Spring.taeng.Answer.Repository;

import Spring.taeng.Answer.Entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepositoy extends JpaRepository<Answer, Integer> {
}
