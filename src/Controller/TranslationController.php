<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatableInterface;

class TranslationController extends AbstractController
{
//    #[Route('/translation', name: 'translation', methods: ['POST'])]
//    public function translation(Request $request, TranslatableInterface $translator): Response
//    {
//        $myVariable = $request->request->get('surname');
//        $translated = $translator->trans($myVariable);
//
//        return $this->render('translation/index.html.twig', [
//            'translatedVariable' => $translated,
//        ]);
//    }
}
