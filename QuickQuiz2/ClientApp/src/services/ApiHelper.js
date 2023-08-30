export class apiHelper {
    static async getAllQuestions() {
      try {
        const response = await fetch(`/api/questions`);
  
        if (!response.ok) {
          throw new Error(`Failed to fetch`);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`Failed to fetch`);
      }
    }

    static async getQuestionById(id){
        try {
        const response = await fetch(`/api/questions/${id}`)
        

        const data = await response.json();
        return data;
        } catch (error){
            throw new Error(`Failed to fetch id`);
        }
    }

    static async getAmountOfQuestions(amount) {
        try {
          const response = await fetch(`/api/random/${amount}`);
    
          if (!response.ok) {
            throw new Error(`Failed to fetch`);
          }
    
          const data = await response.json();
          return data;
        } catch (error) {
          throw new Error(`Failed to fetch amount of questions`);
        }
      }
  }