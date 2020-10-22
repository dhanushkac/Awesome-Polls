<template>
  <div class="poll">
    <span class="p-float-label">
      <InputText
        id="title"
        type="text"
        v-model="title"
        class="p-inputtext-lg"
        @input="onInputQuestion"
      />
      <label for="title">Enter your poll question</label>
    </span>
    <div>
      <span class="warning-info" v-if="hasQuestionError"
        >Poll question should be at least 7 characters</span
      >
    </div>

    <h3 id="answers-title">Your poll answers</h3>

    <div
      v-for="(value, index) in questions"
      v-bind:key="index"
      class="poll-question"
    >
      <InputText
        type="text"
        v-model="questions[index]"
        class="answer"
        @input="onInput"
      />
      <Button
        icon="pi pi-times"
        class="p-button-gray question-btn"
        @click="deleteQuestion(index)"
        v-if="questions.length > 1"
      />
      <Button
        icon="pi pi-plus"
        class="p-button-primary question-btn"
        v-if="questions.length - 1 === index && questions.length < 5"
        @click="addQuestion($event)"
        label="Add another answer"
        :disabled="questions[index].length === 0"
      />
    </div>

    <div class="selection-area p-d-flex">
      <div class="p-field-radiobutton p-mr-5">
        <RadioButton
          id="single"
          name="selection"
          value="single"
          v-model="selection"
        />
        <label for="single">Single Selection</label>
      </div>
      <div class="p-field-radiobutton">
        <RadioButton
          id="multiple"
          name="selection"
          value="multiple"
          v-model="selection"
        />
        <label for="multiple">Multiple Selection</label>
      </div>
    </div>

    <div class="poll-btn">
      <Button
        class="p-button-primary"
        label="Create Poll"
        :disabled="!isCreateEnabled"
      />
    </div>
    <div>Made with by dhanushka</div>
  </div>
</template>

<script>
export default {
  name: "Poll",
  data: () => ({
    title: "",
    questions: [""],
    disabled: false,
    isCreateEnabled: false,
    hasQuestionError: false,
    selection: "single",
    hasAtLeastOneQuestion: false,
  }),
  methods: {
    addQuestion: function () {
      this.questions.push("");
    },
    deleteQuestion: function (index) {
      this.questions = this.questions.filter((_, i) => i !== index);
      this.isCreateEnabled =
        this.hasQuestionError && this.hasAtLeastOneQuestion;
    },
    onInput: function () {
      this.hasAtLeastOneQuestion = this.questions.some((q) => q !== "");
      this.isCreateEnabled =
        !this.hasQuestionError && this.hasAtLeastOneQuestion;
    },
    onInputQuestion: function () {
      this.hasQuestionError = this.title.length < 7;
      this.isCreateEnabled =
        this.hasQuestionError && this.hasAtLeastOneQuestion;
    },
  },
};
</script>

<style scoped>
.poll-btn {
  margin-top: 20px;
}

.poll-question {
  margin: 10px 0;
}

.question-btn {
  margin-left: 10px;
}

#title {
  width: 60%;
}

#answers-title {
  margin-top: 40px;
}

.answer {
  width: 50%;
}

.warning-info {
  color: rgb(255, 91, 91);
  font-size: 0.8em;
}

.selection-area {
  margin: 30px 0;
}

.p-button-gray {
  background: #bbbbbb;
  color: #333;
  border: 1px solid #bbbbbb;
}

.p-button-gray:enabled:hover {
  background: #aaaaaa;
  border-color: #aaaaaa;
  color: #333;
}
</style>