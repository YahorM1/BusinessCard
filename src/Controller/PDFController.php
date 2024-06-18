<?php

namespace App\Controller;

use http\Env;
//use Pontedilana\PhpWeasyPrint\Pdf;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
//use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
//use Pontedilana\WeasyprintBundle\WeasyPrint\Response\PdfResponse;
use Knp\Snappy\Pdf;
use setasign\Fpdi\Fpdi;

/**
 * @method get(string $string)
 */
class PDFController extends AbstractController
{
    public function __construct(private readonly Environment $twig, private readonly Pdf $weasyPring)
    {
    }

    /**
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws LoaderError
     */
    #[Route('/generate-pdf', name: 'generate-pdf')]
    public function genPDF(): Response
    {

        $html = $this->renderView('page2/index.html.twig');
        $snappy = $this->get('knp_snappy.pdf');
        $title = 'my pdf';
        $filename = 'mypdf.pdf';
        $snappy->setOption('page-size', '96x56mm');
        $pdf = $snappy->getOutputFromHtml($html);
        return new Response(
            $pdf,
            200,
            ['Content-Type' => 'application/pdf', 'Content-Disposition' => 'attachment; filename="mypdf.pdf"']
        );
    }
}

//        $html = $this->twig->render('page2/index.html.twig');
//        $newPDF = $this->weasyPring->getOutputFromHtml($html);
//
//        return new PdfResponse(
//            content: $newPDF,
//            fileName: 'file.pdf',
//            contentType: 'application/pdf',
//            contentDisposition: ResponseHeaderBag::DISPOSITION_INLINE,
//            //DISPOSITION_ATTACHMENT - download file
//            status: 200,
//            headers: []
//        );

//
//
//
//
//
//        $html = $this->renderView('page2/index.html.twig');
//        $snappy = new Pdf('/usr/bin/wkhtmltopdf');
//        $pdfContent = $snappy->getOutputFromHtml($html);
//        return new Response(
//            $pdfContent,
//            200,
//            [
//                'Content-Type' => 'application/pdf',
//                'Content-Disposition' => 'attachment; filename="wizytowka.pdf"',
//            ]
//        );