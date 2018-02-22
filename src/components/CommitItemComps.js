export const compTitle = {
  name: "compTitle",
  props: { title: String },
  template: "<h3>{{title}}</h3>"
}

export const compContent = {
  name: "compContent",
  props: { content: String },
  template: "<p>{{content}}</p>"
}

export const compDate = {
  name: "compDate",
  props: { date: String },
  template: "<p class=\"to-right\">{{processDate(date)}}</p>",
  methods: {
    processDate (date) {
      let dateObj = new Date(date);
      return dateObj.toGMTString();processDate(date)
    }
  }
}