﻿define(['_'], function (_) {

    var ctor = function (id, title, answers) {
        this.id = id;
        this.title = title;
        this.answers = answers;
        this.score = 0;

        this.answer = function (userAnswers) {
            var numOfCorrect = 0;

            _.each(this.answers, function (option) {
                if (_.find(userAnswers, function (answer) {
                    return option.groupId.toLowerCase() == answer.groupId && option.text == answer.text.toLowerCase();
                })) {
                    numOfCorrect++;
                }
            });

            this.score = numOfCorrect == this.answers.length ? 100 : 0;
        };
    };

    return ctor;

})