let id = 0

class Idea {
  constructor(title, body) {
    this.id = id++;
    this.title = title;
    this.body = body;
    this.star = false; 
  }

  updateIdea() {
    if (this.star) {
      this.star = false;
    } else {
      this.star = true;
    }
  }
}

