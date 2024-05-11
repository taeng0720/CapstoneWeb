package Spring.taeng.Question.Controller;

import Spring.taeng.Question.Entity.Question;
import Spring.taeng.Question.Repository.QuestionRepository;
import Spring.taeng.Question.Service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping("/question/list")
    public String list(Model model){
        List<Question> questionList = this.questionService.getList();
        model.addAttribute("questionList", questionList);
        return "forums";
    }

}
