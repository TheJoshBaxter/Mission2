using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class CalculatorModel
    {
        [Range(0,100)]
        public int Assignments { get; set; }

        [Range(0, 100)]
        public int GroupProjects { get; set; }

        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Range(0, 100)]
        public int Exams { get; set; }

        [Range(0, 100)]
        public int Intex { get; set; }
    }
}
