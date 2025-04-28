import * as pdf from "html-pdf";
import * as ExcelJS from "exceljs";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";

export class ExportService {
  async exportPDF(templateName: string, data: any, outputFilePath: string) {
    const templatePath = path.join(
      __dirname,
      `../templates/${templateName}.hbs`
    );
    const templateContent = fs.readFileSync(templatePath, "utf8");
    const compiledTemplate = handlebars.compile(templateContent);
    const html = compiledTemplate(data);

    return new Promise((resolve, reject) => {
      pdf.create(html).toFile(outputFilePath, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  async exportExcel(
    data: any[],
    columns: { header: string; key: string; width?: number }[],
    outputFilePath: string
  ) {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Report");

    sheet.columns = columns;
    data.forEach((row) => {
      sheet.addRow(row);
    });

    await workbook.xlsx.writeFile(outputFilePath);
    return outputFilePath;
  }
}
