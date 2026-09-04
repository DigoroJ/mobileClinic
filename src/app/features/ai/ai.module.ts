import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionsComponent } from './predictions/predictions.component';
import { ModelComparisonComponent } from './model-comparison/model-comparison.component';
import { ModelPerformanceComponent } from './model-performance/model-performance.component';
import { DemandPredictionComponent } from './demand-prediction/demand-prediction.component';



@NgModule({
  declarations: [
    PredictionsComponent,
    ModelComparisonComponent,
    ModelPerformanceComponent,
    DemandPredictionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AiModule { }
