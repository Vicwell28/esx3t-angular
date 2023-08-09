import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as ExcelJS from 'exceljs';
import { jsPDF } from 'jspdf';
import { ISale } from 'src/app/core/interfaces/sale/ISale';
import { SaleDetailService } from 'src/app/core/services/sale/sale-detail.service';
import { DialogsFormSaleDetailComponent } from 'src/app/layout/components/DialogsForms/sale/df-sale-detail/df-sale-detail.component';
import { errorDialog } from 'src/app/layout/components/alert';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css', '../style-table.css'],
})
export class SaleDetailComponent implements AfterViewInit {
  // Propiedades del componente
  displayedColumns: string[] = [
    'id',
    'username',
    'sale_date',
    'product_id',
    'quantity',
  ];
  dataSource: any = [];
  dialogRef?: MatDialogRef<DialogsFormSaleDetailComponent>;
  isLoadingPDF = false;
  isLoadingExcel = false;
  isLoadingRelaod = false;
  isLoadingRefresh = false;
  EXCEL_FILE_NAME = 'data.xlsx';

  // ViewChild para paginator y sort
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('dataTable') pdfContent!: ElementRef;

  // Constructor e inyección de dependencias
  constructor(
    private dialog: MatDialog,
    private saleService: SaleDetailService
  ) {}

  // Método que se ejecuta después de cargar la vista
  ngAfterViewInit() {
    this.getAllCategories();
  }

  // Método para abrir el diálogo de edición/creación de categoría de vista
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    isEdit: boolean,
    id?: string | number | undefined
  ): void {
    this.dialogRef = this.dialog.open(DialogsFormSaleDetailComponent, {
      width: '80%',
      height: '90%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        isEdit: isEdit,
        id: id,
      },
    });

    this.dialogRef.afterClosed().subscribe((res) => {
      console.log('Diálogo cerrado');
      console.log('Resultado:', res);
      this.getAllCategories();
    });
  }

  // Método para generar el PDF
  generatePDF() {
    this.isLoadingPDF = true;

    // TODO: Agregar el contenido real para generar el PDF
    const doc = new jsPDF();
    // ... Agregar contenido al PDF ...

    // Cuando termine de generar el PDF, establecer isLoadingPDF en false
    // doc.save('generated.pdf');
    // this.isLoadingPDF = false;
  }

  // Método para aplicar el filtro a la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Método para exportar los datos a Excel
  exportToExcel(): void {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('My Sheet');

    // Add data
    worksheet.addRow(this.displayedColumns);
    this.dataSource.data.forEach((item: any) => {
      const row: any = [];
      this.displayedColumns.forEach((header) => {
        row.push(item[header]);
      });
      worksheet.addRow(row);
    });

    worksheet.getColumn(1).width = 15;
    worksheet.getColumn(2).width = 20;
    worksheet.getColumn(3).width = 20;
    worksheet.getColumn(4).width = 20;

    // Generate Excel file
    workbook.xlsx.writeBuffer().then((buffer: any) => {
      let blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${this.EXCEL_FILE_NAME}`;
      link.click();
      URL.revokeObjectURL(url);
    });
  }

  // Método para obtener todas las categorías
  getAllCategories(): void {
    this.isLoadingRefresh = true;

    this.saleService.indexSale().subscribe({
      next: (value) => {
        console.log(value.data);
        this.dataSource = new MatTableDataSource(value.data as ISale[]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      complete: () => {
        this.isLoadingRefresh = false;
        console.log(`Complete`);
      },
      error: (err) => {
        this.isLoadingRefresh = false;
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al procesar la información.');
      },
    });
  }

  // Método para cambiar el estado de una categoría
  changeStatus(id: number): void {
    const index = this.dataSource.data.findIndex((item: any) => item.id === id);

    this.saleService.destroySale(id).subscribe({
      next: (value) => {
        console.log(value);
      },
      complete: () => {
        console.log(`Complete`);
        this.dataSource.data[index].status =
          !this.dataSource.data[index].status;

        this.dataSource._updateChangeSubscription();
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al procesar la información.');
      },
    });
  }
}
