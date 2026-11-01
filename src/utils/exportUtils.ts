import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function exportElementAsImage(
  elementId: string,
  format: 'png' | 'jpg',
  fileName: string = 'Shajara-Bizning-Oilamiz'
): Promise<boolean> {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id ${elementId} not found`);
    return false;
  }

  try {
    const isDark = document.documentElement.classList.contains('dark');
    const canvas = await html2canvas(element, {
      scale: 2, // 2x high resolution for crisp text & borders
      useCORS: true,
      allowTaint: true,
      backgroundColor: isDark ? '#0b131f' : '#f8fafc',
      logging: false,
    });

    const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
    const dataUrl = canvas.toDataURL(mimeType, 0.95);

    const link = document.createElement('a');
    link.download = `${fileName}.${format}`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (error) {
    console.error('Error generating image export:', error);
    return false;
  }
}

export async function exportElementAsPdf(
  elementId: string,
  fileName: string = 'Shajara-Bizning-Oilamiz'
): Promise<boolean> {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id ${elementId} not found`);
    return false;
  }

  try {
    const isDark = document.documentElement.classList.contains('dark');
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: isDark ? '#0b131f' : '#f8fafc',
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const isLandscape = canvas.width >= canvas.height;

    // Use mm units for standard document handling
    const pdf = new jsPDF({
      orientation: isLandscape ? 'landscape' : 'portrait',
      unit: 'px',
      format: [canvas.width + 40, canvas.height + 40],
    });

    pdf.addImage(imgData, 'PNG', 20, 20, canvas.width, canvas.height);
    pdf.save(`${fileName}.pdf`);
    return true;
  } catch (error) {
    console.error('Error generating PDF export:', error);
    return false;
  }
}
