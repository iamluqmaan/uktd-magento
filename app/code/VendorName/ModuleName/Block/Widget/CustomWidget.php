<?php
namespace VendorName\ModuleName\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class CustomWidget extends Template implements BlockInterface
{
    protected $_template = "VendorName_ModuleName::widget.phtml";
}
