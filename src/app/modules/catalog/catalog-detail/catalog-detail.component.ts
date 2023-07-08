import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css'],
})
export class CatalogDetailComponent {
  constructor(private route: ActivatedRoute) {
    this.questions = Array.from({ length: 10 }, (_, index) => {
      return {
        question: `Texto ${index}`,
        answers: Array.from(
          { length: Math.floor(Math.random() * 10) + 1 },
          (_, answerIndex) => {
            return `Answer ${answerIndex}`;
          }
        ),
      };
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  questions: { question: string; answers: string[] }[];
}
